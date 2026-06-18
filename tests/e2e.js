const puppeteer = require('puppeteer');

(async () => {
  const HOME = 'http://localhost:4173/';
  const NOTE = 'E2E test note ' + Date.now();

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  page.setDefaultTimeout(20000);

  console.log('Opening demo page...');
  await page.goto(HOME, { waitUntil: 'networkidle2' });

  // navigate to Patterns
  await page.waitForSelector('[data-nav="patterns"]');
  await page.click('[data-nav="patterns"]');
  await page.waitForTimeout(500);

  // wait for new-tab-react button
  await page.waitForSelector('[data-action="new-tab-react"]');

  // prepare to catch the new target page
  const newPagePromise = new Promise((resolve) =>
    browser.once('targetcreated', async (target) => {
      try {
        const newPage = await target.page();
        // Wait for it to load
        await newPage.waitForSelector('form#followUpForm, form#followUpForm');
        resolve(newPage);
      } catch (e) {
        resolve(null);
      }
    })
  );

  // click to open new tab (React target)
  await page.click('[data-action="new-tab-react"]');

  const targetPage = await newPagePromise;
  if (!targetPage) {
    console.error('Target page did not open');
    await browser.close();
    process.exit(2);
  }

  console.log('Target page opened, sending follow-up note...');

  // fill and submit form on target page
  await targetPage.waitForSelector('input[name="note"]');
  await targetPage.type('input[name="note"]', NOTE);
  await targetPage.click('groupui-button[type="submit"], button[type="submit"]');

  // Wait a short while for BroadcastChannel message to arrive and host to update
  await page.waitForFunction((expected) => {
    const el = document.querySelector('.returned-note p');
    return el && el.textContent.includes(expected);
  }, {}, NOTE);

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
