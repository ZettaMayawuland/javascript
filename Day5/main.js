// Update your book purchasing function to add parameter for the total duration of credit 
// (indicating the credit term length in months) and calculate the due date for each month 
// Starting from the next month when you work on this code using array function in javascript 
// and display the results as an array of strings.
function bookPurchasing(bookDetail, percentDisc, percentTax, stock, purchasedBook, creditMonth) {
    const {name, price} = bookDetail
    const percentDiscFix = price > 100000 ? percentDisc + 2 : percentDisc;
    const amountDisc = price * percentDiscFix / 100
    const priceAfterDisc = price - amountDisc
    const amountTax = price * percentTax / 100
    const priceAfterTax = priceAfterDisc + amountTax
    
    let totalPrice = 0

    for(let i = 0; i < purchasedBook; i++) {
        if(stock < 0) {
            console.log("Out of stock")
            break
        }
        stock--
        totalPrice += priceAfterTax
    }

    console.log("Book Name: " + name)
    console.log("Original Price: " + price)
    console.log("Percentage of Discount: " + percentDiscFix)
    console.log("Amount of Discount: " + amountDisc)
    console.log("Price After Discount: " + priceAfterDisc)
    console.log("Percentage of Tax: " + percentTax)
    console.log("Amount of Tax: " + amountTax)
    console.log("Price After Tax: " + priceAfterTax)
    console.log("Total Price: " + totalPrice)

    if(stock > 0) {
        console.log("Stock is " + stock + ", can purchase book again")
    } else {
        console.log("Can't purchase book again")
    }

    console.log("Credit Duration: " + creditMonth)

    let currentDate = new Date()
    let dueDate = Array.from({length: creditMonth}, (_, i) => {
        currentDate.setMonth(currentDate.getMonth() + 1)
        return `Due date ${i + 1}: ${currentDate.toLocaleDateString()}`
    })
    console.log("Due date:")
    console.log(dueDate)
}

let bookDetail = {name: "Harry Potter and The Goblet of Fire", price: 189000}
let percentDisc = 15
let percentTax = 10
let stock = 15
let purchasedBook = 5
let creditMonth = 4

bookPurchasing(bookDetail, percentDisc, percentTax, stock, purchasedBook, creditMonth)
