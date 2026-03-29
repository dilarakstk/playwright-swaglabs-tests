const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;

    this.cartItem = page.locator('.cart_item');
    this.checkoutButton = page.locator('#checkout');
  }

  async verifyCartPageLoaded() {
    await expect(this.page).toHaveURL(/cart/);
    await expect(this.checkoutButton).toBeVisible();
  }

  async verifyCartItemCount(count) {
    await expect(this.cartItem).toHaveCount(count);
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }
}

module.exports = CartPage;