import {
    Item
} from './Item.js';

import {
    CartItem
} from './CartItem.js';
import {
    Cart
} from './Cart.js';

const s21Ultra = new Item("Samsung S21 Ultra", "mobile Phones", 200)
const iPhone13ProMax = new Item("iPhone13 Pro Max", "mobile Phones", 220)
const redmiNote5A = new Item("Redmi Note 5A", "mobile Phones", 100)
const vivoX60 = new Item("Vivo X60", "mobile Phones", 100)

const itemOne = new CartItem(s21Ultra, 10)
const itemTwo = new CartItem(iPhone13ProMax, 10)
const itemThree = new CartItem(redmiNote5A, 10)
const itemFour = new CartItem(vivoX60, 10)
const itemFive = new CartItem(s21Ultra, 10)


const cart = new Cart()
cart.addCartItem(itemOne)
cart.addCartItem(itemOne, 2)
cart.addCartItem(itemTwo, 3)
cart.addCartItem(itemTwo, 10)
cart.addCartItem(itemOne, 4)


// cart.setDiscountCode("summer", 100)
// cart.setDiscountCode("winter", 500)

// cart.applayDiscountCode("summer")

// console.log(cart.getAmountSummary())


console.log(cart)