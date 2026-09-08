# SauceDemo QA Testing

A QA testing project based on the [SauceDemo](https://www.saucedemo.com/) web application.

This project covers both **manual testing** and **UI automation testing using Cypress**. I created it to practice the testing workflow from writing test cases and reporting bugs to automating important user flows.

## What I Tested

The main areas covered in this project are:

* Login
* Product listing
* Product sorting
* Cart
* Checkout
* Logout

## Manual Testing

Manual testing was performed using test cases covering the main features of the application.

The manual testing work includes:

* 39 test cases
* Expected and actual results
* Pass/Fail status
* Bug identification
* Bug reports
* Screenshot evidence

The manual testing files are available in the **`Manual_testing`** branch.

## Cypress Automation

I automated the main user flows using **Cypress and JavaScript**.

The automated tests cover:

* Valid and invalid login
* Empty login fields
* Product display
* Add/remove products from cart
* Cart contents
* Checkout
* Product sorting
* Logout

The Cypress tests are available in the **`Cypress_automation`** branch.

One of the automation tests also checks a defect found during manual testing, which helped me verify that the automated test could detect an existing issue.

## Tools Used

* Manual Testing
* Cypress
* JavaScript
* Git & GitHub
* Microsoft Excel
* Chrome DevTools

## Project Structure

```text
Saucedemo-QA_testing
│
├── Manual_testing
│   ├── Test Cases
│   ├── Bug Reports
│   └── Evidence
│
└── Cypress_automation
    ├── Cypress test files
    ├── cypress.config.js
    ├── package.json
    └── package-lock.json
```

## Purpose

The goal of this project was to gain practical experience with QA processes and tools, including manual test case design, defect reporting, test evidence, and UI automation.

This project is part of my QA portfolio and is focused on demonstrating practical testing skills rather than just theoretical knowledge.
