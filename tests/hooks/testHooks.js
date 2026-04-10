const { test } = require('@playwright/test');
const allure = require('allure-js-commons');

test.afterEach(async ({ page }, testInfo) => {
  const screenshot = await page.screenshot({ fullPage: true });

  await allure.attachment('Final Screenshot', screenshot, 'image/png');

  await allure.attachment(
    'Test Status',
    `Test "${testInfo.title}" finished with status: ${testInfo.status}`,
    'text/plain'
  );
});