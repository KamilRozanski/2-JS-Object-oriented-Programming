import {
    Item
} from './Item.js';

import {
    CartItem
} from './CartItem.js';
import {
    Cart
} from './Cart.js';

const s21Ultra = new Item("Samsung S21 Ultra", "mobile Phones", 100)
const iPhone13ProMax = new Item("iPhone13 Pro Max", "mobile Phones", 100)
const redmiNote5A = new Item("Redmi Note 5A", "mobile Phones", 100)
const vivoX60 = new Item("Vivo X60", "mobile Phones", 100)

const itemOne = new CartItem(s21Ultra, 10)
const itemTwo = new CartItem(iPhone13ProMax, 10)
const itemThree = new CartItem(redmiNote5A, 10)
const itemFour = new CartItem(vivoX60, 10)
const itemFive = new CartItem(s21Ultra, 10)


const cart = new Cart()
cart.addCartItem(itemOne, 2)
cart.addCartItem(itemOne, 5)
cart.addCartItem(itemTwo, 2)
cart.addCartItem(itemTwo, 5)
// cart.removeCartItem(itemOne, 1)
// cart.removeCartItem(itemTwo, 5)

// cart.applyDiscountCode("winter")
cart.calculateTotalAmount()

console.log(cart)