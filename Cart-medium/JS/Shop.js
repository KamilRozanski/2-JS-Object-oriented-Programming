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
const iPhone13ProMax = new Item("iPhone13 Pro Max", 200)
const redmiNote5A = new Item("Redmi Note 5A", 100)
const vivoX60 = new Item("Vivo X60", 100)

const itemOne = new CartItem(s21Ultra, 1, "mobile Phones", 10)
const itemTwo = new CartItem(iPhone13ProMax, 1, "mobile Phones", 10)
const itemThree = new CartItem(redmiNote5A, 1, "mobile Phones", 10)
const itemFour = new CartItem(vivoX60, 1, "mobile Phones", 10)

const cart = new Cart()


cart.addToCart(itemOne)
cart.addToCart(itemTwo)
cart.addToCart(itemThree)

console.log(cart.getCartSummary())
cart.setCartDiscount(50)
console.log(cart.getCartSummary())
console.log(cart)