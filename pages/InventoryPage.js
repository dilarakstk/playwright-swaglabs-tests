const { expect } = require('@playwright/test');

class InventoryPage {
  constructor(page) {
    this.page = page;

    this.title = page.locator('.title');
    this.inventoryList = page.locator('.inventory_list');
    this.firstProductButton = page.locator('.inventory_item button').first();
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async verifyInventoryPageLoaded() {
    await expect(this.page).toHaveURL(/inventory/);
    await expect(this.title).toHaveText('Products');
    await expect(this.inventoryList).toBeVisible();
  }

  async addFirstProductToCart() {
    await expect(this.firstProductButton).toBeVisible();
    await this.firstProductButton.click();
  }

  async verifyCartBadge(count) {
    await expect(this.cartBadge).toHaveText(String(count));
  }

  async goToCart() {
    await this.cartLink.click();
  }
}

module.exports = InventoryPage;