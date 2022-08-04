import {
    Item
} from './Item.js';

import {
    CartItem
} from './CartItem.js';
import {
    Cart
} from './Cart.js';

const s21Ultra = new Item("Samsung S21 Ultra", 200)
const iPhone13ProMax = new Item("iPhone13 Pro Max", 220)
const redmiNote5A = new Item("Redmi Note 5A", 100)
const vivoX60 = new Item("Vivo X60", 100)

const itemOne = new CartItem(s21Ultra,"mobile Phones", 10)
const itemTwo = new CartItem(iPhone13ProMax,  "mobile Phones", 10)
const itemThree = new CartItem(redmiNote5A,  "mobile Phones", 10)
const itemFour = new CartItem(vivoX60, "mobile Phones", 10)

// console.log(itemOne.getAmountSummary())


const cart = new Cart()
cart.setCartDiscountPercent(10)
cart.addItem(itemOne, 20)
cart.addItem(itemTwo,5)

console.log(cart.getAmountSummary())
console.log(cart.getDiscountAmount())

console.log(cart)