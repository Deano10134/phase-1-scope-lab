// Write your solution in this file!

var customerName = 'bob'; // global scope

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
  return bestCustomer;
}
const leastFavoriteCustomer = 'not bob';
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bob'; // This will throw an error because leastFavoriteCustomer is a constant
}

// The code defines several functions related to customer names and their best/least favorite status.
// 1. `upperCaseCustomerName`: Converts the global variable `customerName` to uppercase.
// 2. `setBestCustomer`: Sets a global variable `bestCustomer` to 'not bob'.
// 3. `overwriteBestCustomer`: Changes the value of `bestCustomer` to 'maybe bob'.
// 4. `leastFavoriteCustomer`: A constant variable set to 'not bob'.
// 5. `changeLeastFavoriteCustomer`: Attempts to change the value of `leastFavoriteCustomer` to 'bob', but this will result in an error since `leastFavoriteCustomer` is a constant.
// The test cases demonstrate the usage of these functions, showing how to manipulate customer names and their best/least favorite status.
// The code is a demonstration of variable scope in JavaScript, where variables can be declared with different scopes (global, local) and how they can be modified or accessed within functions.
// However, the attempt to change a constant variable will lead to an error, highlighting the immutability of constants in JavaScript.
