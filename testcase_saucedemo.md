# SauceDemo Manual Test Cases

This file contains the 39 manual test cases recorded for the SauceDemo application.

| Test_ID | Module | Test case | Expected result | Actual Result | Status |
| --- | --- | --- | --- | --- | --- |
| TC_001 | Login | Login with valid credentials | User log in sucessfully | User logged in successfully | Pass |
| TC_002 | Login | Login with invalid username and password | User is denied access and an appropriate error message is displayed. | User denied access with error message | Pass |
| TC_003 | Login | login with empty username and empty password | User is denied access and an appropriate error message is displayed. | User denied access with error message | Pass |
| TC_004 | Login | Login with valid username invalid password | User is denied access and an appropriate error message is displayed. | User denied access with error message | Pass |
| TC_005 | Login | Login with invalid username valid password | User is denied access and an appropriate error message is displayed. | User denied access with error message | Pass |
| TC_006 | login | login with valid username and empty password | User is denied access and an appropriate error message is displayed. | User denied access with error message | Pass |
| TC_007 | login | login with empty username and valid password | User is denied access and an appropriate error message is displayed. | User denied access with error message | Pass |
| TC_008 | login | Verify password is masked | Password characters are hidden/masked when entered. | Password is masked | Pass |
| TC_009 | login | Verify login using Enter key | User is successfully logged in when valid credentials are submitted using the Enter key | User logged in successfully | Pass |
| TC_010 | Products | Verify all products are displayed | All the products available are displayed | Every available product is displayed | Pass |
| TC_011 | Products | Verify  product names are displayed correctly | Each product displays the correct product name. | All products display the correct product names. | Pass |
| TC_012 | Products | Verify  product prices | Correct product price is displayed | Product prices are displayed correctly | Pass |
| TC_013 | Products | Verify  product images | Each product displays the corresponding product image | The same product image is displayed for all products. | Fail |
| TC_014 | Products | Verify  product details open correctly | Details of product can be opened | Details of product can be opened | Pass |
| TC_015 | Products | Open cart | User gets redirected to cart | user gets redirected to cart | Pass |
| TC_016 | Products | Sort products by ascending name | User is able to sort product A-Z | User  able to sort product A-Z | Pass |
| TC_017 | Products | Sort products by descneding name | User is able to sort product Z-A | User not able to sort product Z-A | Fail |
| TC_018 | Products | Sort products from price low to high | User is able to sort product from price low to high | User not able to sort product low to high | Fail |
| TC_019 | Products | Sort products from price high to low | User is able to sort product from price high to low | User not able to sort product high to low | Fail |
| TC_020 | Products | Remove a product from the Products page and verify cart count | Cart count decreases by one and the product is removed | The product remains on the page and the cart count does not decrease. | Fail |
| TC_021 | products | Verify Add to Cart button is displayed | Add to cart button is visible | Add to cart button is visible | Pass |
| TC_022 | Cart | Verify added product appears in cart | Added product appears in the cart | Added product appears in the cart | Pass |
| TC_023 | Cart | Verify cart count after removing product | Cart count decreases by one after removing the product | Cart count decrease after removing the profuct | Pass |
| TC_024 | Cart | Verify cart count after adding product | cart count increase by one after adding the product | Cart count increases after adding the product | Pass |
| TC_025 | Cart | Proceed to checkout from cart | user is navigated to checkout page | User sucessfully naviagted to the checkout page | Pass |
| TC_026 | Cart | Navigate back to Products from cart | Navigated to product page from cart | User sucessfully navigated to the product page | Pass |
| TC_027 | Cart | Verify product details in cart | Product detail in the cart matches with details from product page | Product detail in the product page and cart matches | Pass |
| TC_028 | Cart | Add multiple products and verify cart | Multiple products added to cart | Multple products are sucessfully added to cart | Pass |
| TC_029 | Checkout | checkout with all fields empty | User cannot proceed with checkout and an appropriate error message is displayed. | User cannot proceed to checkout with error message | Pass |
| TC_030 | Checkout | checkout with empty first name | User cannot proceed with checkout and an appropriate error message is displayed. | User cannot proceed to checkout with error message | Pass |
| TC_031 | Checkout | checkout with empty last name | User cannot proceed with checkout and an appropriate error message is displayed. | User cannot proceed to checkout with error message | Pass |
| TC_032 | Checkout | checkout with empty zip code | User cannot proceed with checkout and an appropriate error message is displayed. | User cannot proceed to checkout with error message | Pass |
| TC_033 | Checkout | Verify first name | User could enter first name sucessfully | User entered first name sucessfully | Pass |
| TC_034 | Checkout | Verify last name | User could enter last name sucessfully | User cant enter last name | fail |
| TC_035 | Checkout | Verify zip code | User could enter zip code sucessfully | User entered zip code sucessfully | Pass |
| TC_036 | Checkout | Checkout with valid information | User successfully completes the checkout process and receives an order confirmation. | Unable to enter valid checkout information due to an issue with the checkout input fields. | blocked |
| TC_037 | Checkout | Navigate back to continue shopping | Navigated to product page from checkout | User sucessfully navigated to product page | Pass |
| TC_038 | Checkout | Download the information pdf | Information pdf could be downloaded | unable to download due to checkout input field issue | blocked |
| TC_039 | Checkout | Cancel checkout and verify cart | Cancelling on the checkout doesn’t affect cart | Cart remains unchange after cancel | Pass |
