# Playwright Swag Labs Automation Framework

This project is a **UI Test Automation Framework** built with **Playwright + JavaScript** using the **Page Object Model (POM)** design pattern.

It covers:

- Login tests
- Cart tests
- Checkout tests
- Logout flow
- Tag-based execution
- Allure reporting
- Playwright HTML reporting

---

## 🚀 Tech Stack

- **Playwright**
- **JavaScript (Node.js)**
- **Page Object Model (POM)**
- **Allure Report**
- **Playwright HTML Report**

---

## 📁 Project Structure

```bash
playwright-swaglabs/
├── pages/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   └── MenuPage.js
│
├── tests/
│   ├── login/
│   │   └── login.spec.js
│   ├── cart/
│   │   └── cart.spec.js
│   └── checkout/
│       └── checkout.spec.js
│
├── utils/
│   └── testData.js
│
├── playwright.config.js
├── package.json
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### 1) Clone the repository

```bash
git clone <your-repo-url>
cd playwright-swaglabs
```

### 2) Install dependencies

```bash
npm install
```

### 3) Install Playwright browsers

```bash
npx playwright install
```

### 4) Install Allure CLI (Required for Allure Reports)

#### Mac (Homebrew)
```bash
brew install allure
```

#### Verify installation
```bash
allure --version
```

---

## ▶️ Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode
```bash
npm run test:headed
```

### Run tests in Playwright UI mode
```bash
npm run test:ui
```

---

## 🏷️ Run Tests by Tags

This framework supports **tag-based execution**.

### Available tags:
- `@smoke`
- `@regression`
- `@negative`
- `@cart`
- `@checkout`
- `@e2e`

### Run smoke tests
```bash
npm run test:smoke
```

### Run regression tests
```bash
npm run test:regression
```

### Run negative tests
```bash
npm run test:negative
```

### Run cart tests
```bash
npm run test:cart
```

### Run checkout tests
```bash
npm run test:checkout
```

### Run specific tag manually
```bash
npx playwright test --grep @smoke
```

### Run multiple tags
```bash
npx playwright test --grep "@smoke|@cart"
```

---

## 📊 Reports

---

### 1) Playwright HTML Report

Generate and open the Playwright report:

```bash
npm run report
```

---

### 2) Allure Report

#### Run tests and generate Allure results
```bash
npm test
```

#### Generate Allure report
```bash
npm run allure:generate
```

#### Open Allure report
```bash
npm run allure:open
```

#### Serve Allure report directly
```bash
npm run allure:serve
```

#### Run tests + generate Allure report in one command
```bash
npm run test:allure
```

---

## 🧪 Test Coverage

### Login Module
- Valid login
- Invalid login

### Cart Module
- Add product to cart

### Checkout Module
- Complete checkout flow
- Logout after checkout

---

## 🧱 Framework Design

This framework follows the **Page Object Model (POM)** design pattern.

### Why POM?
- Better code organization
- Reusable page actions
- Easier maintenance
- Cleaner test files

### Example:
- `LoginPage.js` → contains login page locators and methods
- `InventoryPage.js` → contains inventory page actions
- `CartPage.js` → contains cart page actions
- `CheckoutPage.js` → contains checkout page actions
- `MenuPage.js` → contains logout/menu actions

---

## 📌 Configuration

Main configuration is inside:

```bash
playwright.config.js
```

This file includes:
- Base URL
- Browser settings
- Screenshot policy
- Video policy
- Trace policy
- Reporters
- Timeouts

---

## 📷 Failure Handling

This framework is configured to automatically collect artifacts on failures:

- **Screenshots** → on failure
- **Videos** → retained on failure
- **Trace files** → on first retry

This helps debugging failed test runs easily.

---

## 📝 Test Data

Test data is managed in:

```bash
utils/testData.js
```

This includes:
- Valid user credentials
- Invalid user credentials
- Checkout information

Example:
```javascript
module.exports = {
  validUser: {
    username: 'standard_user',
    password: 'secret_sauce',
  }
};
```

---

## 📦 Package Scripts

Available npm scripts from `package.json`:

```json
"scripts": {
  "test": "npx playwright test",
  "test:headed": "npx playwright test --headed",
  "test:ui": "npx playwright test --ui",
  "test:smoke": "npx playwright test --grep @smoke",
  "test:regression": "npx playwright test --grep @regression",
  "test:negative": "npx playwright test --grep @negative",
  "test:cart": "npx playwright test --grep @cart",
  "test:checkout": "npx playwright test --grep @checkout",
  "report": "npx playwright show-report",
  "allure:generate": "allure generate ./allure-results --clean -o ./allure-report",
  "allure:open": "allure open ./allure-report",
  "allure:serve": "allure serve ./allure-results",
  "test:allure": "npx playwright test && allure generate ./allure-results --clean -o ./allure-report"
}
```

---

## 🛠️ Best Practices Used

- Page Object Model (POM)
- Reusable page methods
- Tag-based execution
- Centralized test data
- Clean test separation
- Reporting integration
- Failure artifact collection

---

## 👨‍💻 Author

**Dilara**
