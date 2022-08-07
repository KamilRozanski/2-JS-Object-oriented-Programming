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

const itemOne = new CartItem(s21Ultra, "mobile Phones", 10)
const itemTwo = new CartItem(iPhone13ProMax, "mobile Phones", 10)
const itemThree = new CartItem(redmiNote5A, "mobile Phones", 10)
const itemFour = new CartItem(vivoX60, "mobile Phones", 10)



const cart = new Cart()
cart.addCartItem(itemOne, 2)
cart.addCartItem(itemTwo, 5)

cart.setDiscountCode("summer", 100)
cart.setDiscountCode("winter", 500)
cart.applayDiscountCode("winter")

console.log(cart.getAmountSummary())


// console.log(cart)