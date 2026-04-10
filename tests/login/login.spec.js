const { test } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const InventoryPage = require('../../pages/InventoryPage');
const { validUser, invalidUser } = require('../../utils/testData');
const allure = require('allure-js-commons');

require('../hooks/testHooks');
test.describe('Login Tests', () => {

  test('@smoke @regression @validLogin Valid login should navigate to inventory page', async ({ page }) => {
    await allure.owner('Dilarakistak');
    await allure.severity('critical');
    await allure.description('Valid login should navigate to inventory page');
    await allure.epic('Swag Labs');
    await allure.feature('Login');
    await allure.story('Login with valid credentials');
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