import {
    Item
} from './Item.js';

import {
    CartItem
} from './CartItem.js';

// import {
//     Cart
// } from './CartItem.js';



const s21Ultra = new Item("Samsung S21 Ultra", 100)
const iPhone13ProMax = new Item("iPhone13 Pro Max", 100)
const redmiNote5A = new Item("Redmi Note 5A", 50)
const vivoX60 = new Item("Vivo X60", 50)

const basket = new CartItem(s21Ultra, 1, "mobile Phones", 50)
console.log(basket)