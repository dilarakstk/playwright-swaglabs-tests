const { test } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const InventoryPage = require('../../pages/InventoryPage');
const CartPage = require('../../pages/CartPage');
const { validUser } = require('../../utils/testData');
require('../hooks/testHooks');
test.describe('Cart Tests', () => {

  test('@smoke @cart @regression User should add product to cart successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login(validUser.username, validUser.password);

    await inventoryPage.verifyInventoryPageLoaded();
    await inventoryPage.addFirstProductToCart();
    await inventoryPage.verifyCartBadge(1);
    await inventoryPage.goToCart();

    await cartPage.verifyCartPageLoaded();
    await cartPage.verifyCartItemCount(1);
  });

});