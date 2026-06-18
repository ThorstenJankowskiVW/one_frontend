const puppeteer = require('puppeteer');

const BASE_URL = (process.env.BASE_URL || 'http://127.0.0.1:4173/one_frontend/').replace(/\/?$/, '/');
const context = encodeURIComponent(JSON.stringify({
  caseId: 'CASE-E2E',
  origin: 'Hannover',
  destination: 'Barcelona',
  departureDate: '2026-06-18',
  passengers: 2
}));

async function assertPage(page, path, expectedTitle, expectedText) {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
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

  const title = await page.title();
  if (title !== expectedTitle) {
    throw new Error(`${path} rendered "${title}" instead of "${expectedTitle}"`);
  }

  if (errors.length) {
    throw new Error(`${path} logged browser errors:\n${errors.join('\n')}`);
  }
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

    await assertPage(smokePage, '', 'One Frontend Demonstrator', 'One Frontend Demonstrator');
    await assertPage(
      smokePage,
      `calendar-target.html?context=${context}`,
      'Angular App - Calendar',
      'Kalender in Angular'
    );

    await smokePage.evaluate(() => {
      [...document.querySelectorAll('groupui-button')]
        .find((button) => button.textContent.includes('2026-06-18'))
        ?.click();
    });
    await smokePage.waitForFunction(() => document.body.innerText.includes('Service-Termin (success)'));

    await assertPage(
      smokePage,
      `target-svelte.html?context=${context}`,
      'Svelte Remote - Flight Options',
      'Echte Svelte-Komponente'
    );
    await smokePage.click('input[value="via-munich"]');
    await smokePage.waitForFunction(() => document.body.innerText.includes('One Frontend Air'));
    await smokePage.click('.svelte-submit');
    await smokePage.waitForFunction(() => document.body.innerText.includes('Übergeben: Via München'));

    await assertPage(
      smokePage,
      `target-stencil.html?context=${context}`,
      'Web Component - Flight Extras',
      'Native Custom Element'
    );
    await assertPage(
      smokePage,
      `target-react.html?context=${context}`,
      'React Target - Case Follow-Up',
      'React Target App'
    );
    await assertPage(
      smokePage,
      `linked-target.html?context=${context}`,
      'Angular App - Case Follow-Up',
      'Angular 20.0.7'
    );

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
      (expected) => document.querySelector('.returned-note p')?.textContent.includes(expected),
      { timeout: 30000 },
      note
    );

    console.log('E2E success: all production targets and the host roundtrip work.');
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
