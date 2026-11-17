# SauceDemo QA Testing

A QA testing project based on the [SauceDemo](https://www.saucedemo.com/) web application.

This project covers both **manual testing** and **UI automation testing using Cypress**. I created it to practice the testing workflow, from writing test cases and reporting bugs to automating important user flows.

## What I Tested

The main areas covered in this project are:

- Login
- Product listing
- Product sorting
- Cart
- Checkout
- Logout

## Manual Testing

Manual testing was performed using test cases covering the main features of the application.

The manual testing work includes:

- 39 test cases
- Expected and actual results
- Pass/Fail status
- Bug identification
- Bug reports

**Documentation:**

- [Test Cases (Markdown)](testcase_saucedemo.md)
- [Test Cases (Excel)](testcase_saucedemo.xlsx)
- [Bug Reports (Markdown)](Bugreport_saucedemo.md)
- [Bug Reports (Excel)](Bugreport_saucedemo.xlsx)

## Cypress Automation

I automated the main user flows using **Cypress and JavaScript**.

The automated tests cover:

- Valid and invalid login
- Empty login fields
- Product display
- Add/remove products from cart
- Cart contents
- Checkout
- Product sorting
- Logout

One of the automation tests also checks a defect found during manual testing, which helped me verify that the automated test could detect an existing issue.

The Cypress test files are located in `cypress/e2e/`.

## Tools Used

- Manual Testing
- Cypress
- JavaScript
- Git & GitHub
- Microsoft Excel
- Chrome DevTools

## Project Structure

```text
Saucedemo-QA_testing/
│
├── Bugreport_saucedemo.xlsx
├── Bugreport_saucedemo.md
├── testcase_saucedemo.xlsx
├── testcase_saucedemo.md
├── cypress.config.js
├── package.json
├── package-lock.json
│
├── cypress/
│   └── e2e/
│       ├── cart.cy.js
│       ├── checkout.cy.js
│       ├── logintest.cy.js
│       ├── logout.cy.js
│       ├── product.cy.js
│       └── sorting.cy.js
│
└── README.md
```

## Purpose

The goal of this project was to gain practical experience with QA processes and tools, including manual test case design, defect reporting, and UI automation.

This project is part of my QA portfolio and focuses on demonstrating practical testing skills rather than just theoretical knowledge.