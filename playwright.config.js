const { defineConfig,devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60000,
  expect: {
    timeout: 10000,
  },
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['allure-playwright']
  ],
  use: {
    
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  
  baseURL: 'https://www.saucedemo.com',
  headless: false,
  viewport: { width: 1440, height: 900 },
  actionTimeout: 10000,
  navigationTimeout: 15000,

  screenshot: 'on',
  video: 'on',
  trace: 'on',

  launchOptions: {
    slowMo: 500
  }

  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
        browserName: 'chromium',
        viewport: { width: 1440, height: 900 },
       },
    },
    {baseURL: 'https://www.saucedemo.com',
    headless: false,
    viewport: { width: 1440, height: 900 },
    actionTimeout: 10000,
    navigationTimeout: 15000,
    screenshot: 'on',
      name: 'firefox',
      use: { ...devices['Desktop Firefox'],
        browserName: 'firefox',
        viewport: { width: 1440, height: 900 },
      },
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Edge'],
        browserName: 'chromium',
        viewport: { width: 1440, height: 900 },
      },
    },
    {
      name: 'safari',
      use: { ...devices['Desktop Safari'],
        browserName: 'webkit',
        viewport: { width: 1440, height: 900 },
      },
    }

  ],  

});