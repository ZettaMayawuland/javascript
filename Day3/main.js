// Try create a book purchasing function that has parameters detail of a book, 
// percentage of the discount, percentage of tax. Then display all the parameters with additional data:
// Amount of discount
// Price after discount
// Amount of tax
// Price after tax
function bookPurchasing(bookDetail, percentDisc, percentTax) {
    const {name, price} = bookDetail
    const percentDiscFix = price > 100000 ? percentDisc + 2 : percentDisc;
    const amountDisc = price * percentDiscFix / 100
    const priceAfterDisc = price - amountDisc
    const amountTax = price * percentTax / 100
    const priceAfterTax = priceAfterDisc + amountTax

    console.log("Book Name: " + name)
    console.log("Original Price: " + price)
    console.log("Percentage of Discount: " + percentDiscFix)
    console.log("Amount of Discount: " + amountDisc)
    console.log("Price After Discount: " + priceAfterDisc)
    console.log("Percentage of Tax: " + percentTax)
    console.log("Amount of Tax: " + amountTax)
    console.log("Price After Tax: " + priceAfterTax)
}

let bookDetail = {name: "Harry Potter and The Goblet of Fire", price: 189000}
let percentDisc = 15
let percentTax = 10

bookPurchasing(bookDetail, percentDisc, percentTax)