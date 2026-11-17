SauceDemo Bug Reports
This file contains the bug reports recorded during manual testing of the SauceDemo application.
BUG_001: Same image is displayed for all products in the product page
- Preconditions: Logged in as problem user
- Environment: Chrome/windows11
- Steps to Reproduce:
  - log in as problem user
  - navigate product page
  - compare and observe image with product detail
- Evidence: Not provided
- Expected Result: Product image matches with product details
- Actual Result: Same image is displayed for all products
- Severity: High
- Priority: High
BUG_002: Z-A sorting doesnt work
- Preconditions: Logged in as problem user
- Environment: Chrome/windows11
- Steps to Reproduce:
  - log in as problem user
  - navigate product page
  - click filter and choose Z-A sorting
- Evidence: https://drive.google.com/file/d/1kmYLpoOlZM42hccKin0t2F9C73xqcnrO/view?usp=drive_link
- Expected Result: Product are sorted in descending alphabetic order
- Actual Result: Product order doesnt change
- Severity: Medium
- Priority: Medium
BUG_003: low-high sorting doesnt work
- Preconditions: Logged in as problem user
- Environment: Chrome/windows11
- Steps to Reproduce:
  - log in as problem user
  - navigate product page
  - click filter and choose low-high sorting
- Evidence: https://drive.google.com/file/d/15CBbBPX_z8hFJZTJwlvUSQnNKNR-chgz/view?usp=drive_link
- Expected Result: Product are sorted in ascending product price order
- Actual Result: Product order doesnt change
- Severity: Medium
- Priority: Medium
BUG_004: low-high sorting doesnt work
- Preconditions: Logged in as problem user
- Environment: Chrome/windows11
- Steps to Reproduce:
  - log in as problem user
  - navigate product page
  - click filter and choose high-low sorting
- Evidence: https://drive.google.com/file/d/1zzLNSFdiQ6Wvsua7btcYfk3Tc2BT5BGG/view?usp=drive_link
- Expected Result: Product are sorted in descending product price order
- Actual Result: Product order doesnt change
- Severity: Medium
- Priority: Medium
BUG_005: Remove button does not remove product or update cart count on Products page
- Preconditions: Logged in as problem user
- Environment: Chrome/windows11
- Steps to Reproduce:
  - log in as problem user
  - navigate product page
  - Add to cart a product
  - Remove the product from product page
  - check cart value
- Evidence: https://drive.google.com/file/d/1LL6-WpACRERAISszNR1I7AZUOHDemmfY/view?usp=drive_link
- Expected Result: Remove button removes the product and the cart count decreases
- Actual Result: The product remains on the page and the cart count does not decrease.
- Severity: Medium
- Priority: High
BUG_006: Last Name field does not retain input and alters First Name field
- Preconditions: Logged in as problem user and navigate to the checkout page
- Environment: Chrome/windows11
- Steps to Reproduce:
  - log in as problem user
  - navigate to checkout page
  - enter first name
  - attempt to enter last name
  - observe both field
- Evidence: https://drive.google.com/file/d/1QCnyhigeDMs9B3ZitIsKtv67YA30rYAQ/view?usp=drive_link
- Expected Result: First name and last name are entered and retained by the input field
- Actual Result: last name is not retained and alters first name when entered
- Severity: High
- Priority: High