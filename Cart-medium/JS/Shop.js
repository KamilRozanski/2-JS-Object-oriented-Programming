import {
    CartItem
} from './CartItem.js';
import {
    Cart
} from './Cart.js';


const s21Ultra = new CartItem("Samsung S21 Ultra", "mobile phones", 5700, 199)
const iPhone13ProMax = new CartItem("iPhone13 Pro Max", "mobile phones", 5800, 49)
const redmiNote5A = new CartItem("Redmi Note 5A", "mobile phones", 1200, 49)

const cart = new Cart
cart.addToCart(s21Ultra)
cart.addToCart(iPhone13ProMax)
cart.addToCart(redmiNote5A)
console.log(cart.getCartSummary())


console.log(cart.showCart())