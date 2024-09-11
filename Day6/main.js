// Based on the due date that was generated on JS Day 5, update the function to calculate 
// the amount of payment for each month using array function. Then display the data as an 
// array of objects that have values due date of payment and amount of payment, be careful 
// the total amount of payment must be the same as total price of books purchased.
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
    console.log("Purchased book: " + purchasedBook)
    console.log("Total Price: " + totalPrice)

    if(stock > 0) {
        console.log("Stock is " + stock + ", can purchase book again")
    } else {
        console.log("Can't purchase book again")
    }

    console.log("Credit Duration: " + creditMonth + " month")

    let currentDate = new Date()
    let scheduleDate = Array.from({length: creditMonth}, (_, i) => {
        currentDate.setMonth(currentDate.getMonth() + 1)
        return {
            dueDate: `Due date ${i + 1}: ${currentDate.toLocaleDateString()}`,
            amount: `Amount: ${parseFloat(totalPrice/creditMonth).toFixed()}`,
        };
    })
    console.log("Schedule: ")
    scheduleDate.forEach((item) => console.log(item.dueDate, item.amount))
}

let bookDetail = {name: "Harry Potter and The Goblet of Fire", price: 239200}
let percentDisc = 8
let percentTax = 10
let stock = 15
let purchasedBook = 5
let creditMonth = 4

bookPurchasing(bookDetail, percentDisc, percentTax, stock, purchasedBook, creditMonth)