const puppeteer = require('puppeteer');

(async () => {
  const HOME = 'http://localhost:4173/';
  const NOTE = 'E2E test note ' + Date.now();

  const browser = await puppeteer.launch({ headless: true, args: ['--disable-dev-shm-usage'] });
  const page = await browser.newPage();
  page.setDefaultTimeout(30000);
  page.on('dialog', async (dialog) => {
    console.log('Dismiss dialog on host:', dialog.message());
    await dialog.dismiss();
  });

  console.log('Opening demo page...');
  await page.goto(HOME, { waitUntil: 'networkidle2' });
  await page.waitForFunction(() => window.onefeTestHelpers && typeof window.onefeTestHelpers.setActiveView === 'function');

  console.log('Switching host to Patterns view...');
  await page.evaluate(() => {
    window.onefeTestHelpers.setActiveView('patterns');
  });
  await page.waitForFunction(() => window.onefeTestHelpers.getActiveView() === 'patterns');
  await page.waitForSelector('[data-action="new-tab-react"]', { visible: true });

  console.log('Opening React target page...');
  const clickResult = await page.evaluate(() => {
    const el = document.querySelector('[data-action="new-tab-react"]');
    if (el) {
      el.click();
      return true;
    }
    return false;
  });
  if (!clickResult) {
    console.error('Could not find new-tab-react trigger');
    await browser.close();
    process.exit(2);
  }

  const targetPagePromise = browser.waitForTarget((target) => target.url().includes('target-react.html'), { timeout: 20000 });
  const targetTarget = await targetPagePromise;
  const targetPage = await targetTarget.page();
  if (!targetPage) {
    console.error('Target page did not open');
    await browser.close();
    process.exit(2);
  }
  targetPage.on('dialog', async (dialog) => {
    console.log('Dismiss dialog on target:', dialog.message());
    await dialog.dismiss();
  });
  await targetPage.waitForSelector('input[name="note"]', { visible: true });

  console.log('Target page opened. Switching host to Linked Launchpad before sending note...');
  await page.evaluate(() => {
    window.onefeTestHelpers.setActiveView('linked-launchpad');
  });
  await page.waitForFunction(() => window.onefeTestHelpers.getActiveView() === 'linked-launchpad');

  console.log('Sending follow-up note from target...');
  await targetPage.type('input[name="note"]', NOTE);
  await targetPage.evaluate(() => {
    const form = document.getElementById('followUpForm');
    if (form) form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
  });

  await page.waitForFunction((expected) => {
    const el = document.querySelector('.returned-note p');
    return el && el.textContent.includes(expected);
  }, { timeout: 30000 }, NOTE);

  const received = await page.$eval('.returned-note p', (el) => el.textContent);
  if (received && received.includes(NOTE)) {
    console.log('E2E success: Host received note ->', received);
    await browser.close();
    process.exit(0);
  } else {
    console.error('E2E failed: Host did not receive note');
    await browser.close();
    process.exit(1);
  }
})();
