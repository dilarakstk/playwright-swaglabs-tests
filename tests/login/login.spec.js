const { test } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const InventoryPage = require('../../pages/InventoryPage');
const { validUser, invalidUser } = require('../../utils/testData');

test.describe('Login Tests', () => {

  test('@smoke @regression Valid login should navigate to inventory page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.verifyLoginPageLoaded();
    await loginPage.login(validUser.username, validUser.password);
    await inventoryPage.verifyInventoryPageLoaded();
  });

  test('@negative @regression Invalid login should show error message', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.verifyLoginPageLoaded();
    await loginPage.login(invalidUser.username, invalidUser.password);
    await loginPage.verifyInvalidLoginError();
  });

});