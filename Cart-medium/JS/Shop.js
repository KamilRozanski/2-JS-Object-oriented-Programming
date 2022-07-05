import {
    CartItem
} from './CartItem.js';
import {
    Cart
} from './Cart.js';
import {
    Utilties
} from "./Utilties.js";


const s21Ultra = new CartItem("Samsung S21 Ultra", "mobile phones", 5000, 199)
const iPhone13ProMax = new CartItem("iPhone13 Pro Max", "mobile phones", 5500, 99)
const redmiNote5A = new CartItem("Redmi Note 5A", "mobile phones", 150, 49)

const cart = new Cart
cart.addToCart(s21Ultra, 1)
cart.addToCart(iPhone13ProMax, 1)
cart.addToCart(redmiNote5A, 2)
console.log(cart.getCartSummary())


// console.log(cart)