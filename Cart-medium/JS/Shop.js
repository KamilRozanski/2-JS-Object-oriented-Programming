import {
    Item
} from './Item.js';

import {
    CartItem
} from './CartItem.js';

// import {
//     Cart
// } from './CartItem.js';



const s21Ultra = new Item("Samsung S21 Ultra", 200)
const iPhone13ProMax = new Item("iPhone13 Pro Max", 200)
const redmiNote5A = new Item("Redmi Note 5A", 50)
const vivoX60 = new Item("Vivo X60", 50)

const itemOne = new CartItem(s21Ultra, 3, "mobile Phones", 100)
const itemTwo = new CartItem(iPhone13ProMax, 3, "mobile Phones", 50)
const itemThree = new CartItem(redmiNote5A, 3, "mobile Phones", 50)

itemOne.changeDiscountProcentage(100)
console.log(itemOne)