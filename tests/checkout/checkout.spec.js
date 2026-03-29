const { test } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const InventoryPage = require('../../pages/InventoryPage');
const CartPage = require('../../pages/CartPage');
const CheckoutPage = require('../../pages/CheckoutPage');
const MenuPage = require('../../pages/MenuPage');
const { validUser, checkoutInfo } = require('../../utils/testData');

test.describe('Checkout Tests', () => {

  test('@e2e @checkout @regression User should complete checkout successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const menuPage = new MenuPage(page);

    await loginPage.goto();
    await loginPage.login(validUser.username, validUser.password);

    await inventoryPage.verifyInventoryPageLoaded();
    await inventoryPage.addFirstProductToCart();
    await inventoryPage.verifyCartBadge(1);
    await inventoryPage.goToCart();

    await cartPage.verifyCartPageLoaded();
    await cartPage.verifyCartItemCount(1);
    await cartPage.clickCheckout();

    await checkoutPage.verifyCheckoutStepOneLoaded();
    await checkoutPage.fillCheckoutInfo(
      checkoutInfo.firstName,
      checkoutInfo.lastName,
      checkoutInfo.postalCode
    );
    await checkoutPage.clickContinue();

    await checkoutPage.verifyCheckoutStepTwoLoaded();
    await checkoutPage.clickFinish();
    await checkoutPage.verifyCheckoutComplete();

    await menuPage.openMenu();
    await menuPage.logout();
    await menuPage.verifyLoggedOut();
  });

});