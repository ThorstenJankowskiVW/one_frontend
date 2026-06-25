const puppeteer = require('puppeteer');

const BASE_URL = (process.env.BASE_URL || 'http://127.0.0.1:4173/one_frontend/').replace(/\/?$/, '/');
const aftersalesContext = encodeURIComponent(JSON.stringify({
  caseId: 'CASE-E2E',
  journeyType: 'aftersales',
  vehicleModel: 'Volkswagen ID.7 Tourer',
  serviceConcern: 'Inspection with brake and software check',
  appointmentDate: '2026-06-18',
  servicePackageLabel: 'Inspection Plus'
}));
const flightContext = encodeURIComponent(JSON.stringify({
  caseId: 'CASE-E2E-FLIGHT',
  journeyType: 'flight-booking',
  origin: 'Hannover',
  destination: 'Barcelona',
  departureDate: '2026-06-18',
  passengers: 2
}));

async function assertPageHasText(page, path, expectedText) {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    const text = message.text();
    if (message.type() === 'error' && !text.includes('Failed to load resource')) {
      errors.push(text);
    }
  });

  const response = await page.goto(`${BASE_URL}${path}`, { waitUntil: 'networkidle2' });
  if (!response?.ok()) {
    throw new Error(`${path} returned HTTP ${response?.status()}`);
  }

  await page.waitForFunction(
    (text) => document.body.innerText.includes(text),
    { timeout: 30000 },
    expectedText
  );

  if (errors.length) {
    throw new Error(`${path} logged browser errors:\n${errors.join('\n')}`);
  }
}

async function getFrame(page, selector) {
  await page.waitForSelector(selector, { visible: true });
  const handle = await page.$(selector);
  const frame = await handle.contentFrame();
  if (!frame) {
    throw new Error(`No frame found for selector ${selector}`);
  }
  return frame;
}

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--disable-dev-shm-usage',
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  });

  try {
    const smokePage = await browser.newPage();
    smokePage.setDefaultTimeout(30000);

    await assertPageHasText(smokePage, '', 'Volkswagen Aftersales Platform');
    await assertPageHasText(smokePage, '?view=flight-booking', 'Flight booking Hannover');
    await assertPageHasText(smokePage, `calendar-target.html?context=${aftersalesContext}`, 'Datum und Slot auswählen');
    await assertPageHasText(smokePage, `target-svelte.html?context=${aftersalesContext}`, 'Servicepaket auswählen');
    await assertPageHasText(smokePage, `target-stencil.html?context=${aftersalesContext}`, 'Extras und Mobilität auswählen');
    await assertPageHasText(smokePage, `target-react.html?context=${aftersalesContext}`, 'React Target App');
    await assertPageHasText(smokePage, `linked-target.html?context=${aftersalesContext}`, 'Angular App');

    const aftersalesPage = await browser.newPage();
    aftersalesPage.setDefaultTimeout(30000);
    await aftersalesPage.goto(`${BASE_URL}?view=aftersales-journey`, { waitUntil: 'networkidle2' });
    await aftersalesPage.waitForFunction(() => document.body.innerText.includes('Volkswagen Aftersales service appointment'));

    await aftersalesPage.click('[data-action="open-aftersales-calendar"]');
    const angularFrame = await getFrame(aftersalesPage, 'iframe[title="Angular Aftersales Appointment App"]');
    await angularFrame.waitForSelector('[data-slot-id="BER-2026-06-18-AM"]', { visible: true });
    await angularFrame.$eval('[data-slot-id="BER-2026-06-18-AM"]', (element) => element.click());
    await angularFrame.$eval('#transferSelectionButton', (element) => element.click());
    await aftersalesPage.waitForFunction(() => document.body.innerText.includes('Werkstattslot übernommen'));
    await aftersalesPage.waitForFunction(() => {
      const step1 = document.querySelector('groupui-step[data-aftersales-step="1"]');
      const step2 = document.querySelector('groupui-step[data-aftersales-step="2"]');
      return step2?.hasAttribute('active') && !step1?.hasAttribute('active') && !step1?.hasAttribute('done');
    });

    await aftersalesPage.click('[data-action="open-aftersales-packages"]');
    const svelteFrame = await getFrame(aftersalesPage, 'iframe[title="Svelte Aftersales Package App"]');
    await svelteFrame.waitForSelector('input[value="PKG-BRAKE-COMFORT"]', { visible: true });
    await svelteFrame.$eval('input[value="PKG-BRAKE-COMFORT"]', (element) => element.click());
    await svelteFrame.$eval('.svelte-submit', (element) => element.click());
    await aftersalesPage.waitForFunction(() => document.body.innerText.includes('Servicepaket übernommen'));

    await aftersalesPage.click('[data-action="open-aftersales-extras"]');
    const extrasFrame = await getFrame(aftersalesPage, 'iframe[title="Web Component Aftersales Extras App"]');
    await extrasFrame.waitForSelector('[data-extra-id="EXTRA-REPLACEMENT"]', { visible: true });
    await extrasFrame.$eval('[data-extra-id="EXTRA-REPLACEMENT"]', (element) => element.click());
    await extrasFrame.select('#mobilitySelect', 'replacement-vehicle');
    await extrasFrame.$eval('#submitExtras', (element) => element.click());
    await aftersalesPage.waitForFunction(() => document.body.innerText.includes('Service order preview'));
    await aftersalesPage.waitForFunction(() => document.body.innerText.includes('Brake Comfort Package'));

    await assertPageHasText(smokePage, `calendar-target.html?context=${flightContext}`, 'Datum auswählen');
    await assertPageHasText(smokePage, `target-svelte.html?context=${flightContext}`, 'Flugoption auswählen');
    await assertPageHasText(smokePage, `target-stencil.html?context=${flightContext}`, 'Reise-Extras auswählen');

    const hostPage = await browser.newPage();
    hostPage.setDefaultTimeout(30000);
    await hostPage.goto(BASE_URL, { waitUntil: 'networkidle2' });
    await hostPage.waitForFunction(() => window.onefeTestHelpers);
    await hostPage.evaluate(() => window.onefeTestHelpers.setActiveView('patterns'));
    await hostPage.waitForSelector('[data-action="new-tab-react"]', { visible: true });

    const targetPromise = browser.waitForTarget(
      (target) => target.url().includes('target-react.html'),
      { timeout: 20000 }
    );
    await hostPage.click('[data-action="new-tab-react"]');
    const target = await targetPromise;
    const targetPage = await target.page();
    const note = `E2E follow-up ${Date.now()}`;

    await targetPage.waitForSelector('input[name="note"]', { visible: true });
    await hostPage.evaluate(() => window.onefeTestHelpers.setActiveView('linked-launchpad'));
    await targetPage.type('input[name="note"]', note);
    await targetPage.$eval('#followUpForm', (form) => {
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    });
    await hostPage.waitForFunction(
      (expected) => document.body.innerText.includes(expected),
      { timeout: 30000 },
      note
    );

    console.log('E2E success: aftersales journey, reference flow targets, and new-tab roundtrip work.');
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
