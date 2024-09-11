// Update your book purchasing function to have parameter amount of stock & amount of purchased book. 
// Then calculate total price & display the result.
// Note:
// The function must have at least:
// for loop iteration
// break when amount of book is already out of stock
// Display text if amount of book after purchasing can be purchased again or not
function bookPurchasing(bookDetail, percentDisc, percentTax, stock, purchasedBook) {
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
}

let bookDetail = {name: "Harry Potter and The Goblet of Fire", price: 189000}
let percentDisc = 15
let percentTax = 10
let stock = 15
let purchasedBook = 5

bookPurchasing(bookDetail, percentDisc, percentTax, stock, purchasedBook)