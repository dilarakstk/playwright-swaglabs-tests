const { expect } = require('@playwright/test');

class MenuPage {
  constructor(page) {
    this.page = page;

    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutButton = page.locator('#logout_sidebar_link');
    this.loginButton = page.locator('#login-button');
  }

  async openMenu() {
    await this.menuButton.click();
  }

  async logout() {
    await this.logoutButton.click();
  }

  async verifyLoggedOut() {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/');
    await expect(this.loginButton).toBeVisible();
  }
}

module.exports = MenuPage;