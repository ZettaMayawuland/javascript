// Declare two variable with name of your favourite books
let firstBook = "Harry Potter and The Goblet of Fire"
let secondBook = "Murder on the Orient Express"

// Update value of first with name your least favourite book
firstBook = "The Alchemist"

// Define second variable as constant and try update the value
// const secondBook = "Murder on the Orient Express"
secondBook = "Tentang Kamu"

console.log(firstBook)
console.log(secondBook)

// Concat value from variables task number 1 into new variable
let conValue = "My favorite book is " + firstBook + " and " + secondBook
console.log(conValue)

// Try declare more variable using other data type with dynamic value and primitive value
// let age = 21
// let isStudent = true
// let student = {
//     name: "maya",
//     major: "informatics",
//     hobbies: [reading, dancing],
// };
// let number = [1, 2, 3, 4, 5]

// Use comparison operator with 2 variables from task number 1, 
// display true if the name of books have same name otherwise display false
console.log(firstBook==secondBook)

// Create new 2 variables to contain price of your favourite books
let priceFirstBook = 189000
let priceSecondBook = 45000

// Compare the variables which one have the highest price
let comparisonPrice = priceFirstBook > priceSecondBook ? "The first book is more expensive" : "The second book is more expensive";
console.log(comparisonPrice)

// Find the average price from those 2 variables using arithmetic operator
let averagePrice = (priceFirstBook + priceSecondBook) / 2;
console.log("The average price is " + averagePrice)

// Create new variable to use ternary operator to determine the value of variable, 
// if the average price more than 500000 set value with string “Expensive” if less or equal set “Cheap”
let valueVariable = averagePrice > 500000 ? "Expensive" : "Cheap";
console.log(valueVariable)