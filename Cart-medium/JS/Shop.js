import {
    CartItem
} from './CartItem.js';
import {
    Cart
} from './Cart.js';



const s21Ultra = new CartItem("Samsung S21 Ultra", "mobile phones", 100, 5)
const iPhone13ProMax = new CartItem("iPhone13 Pro Max", "mobile phones", 100, 5)
const redmiNote5A = new CartItem("Redmi Note 5A", "mobile phones", 50, 1)
const vivoX60 = new CartItem("Vivo X60", "mobile phones", 50, 1)

const cart = new Cart(99, "elo")

cart.addToCart(s21Ultra, 1)
cart.addToCart(iPhone13ProMax, 1)
cart.addToCart(redmiNote5A, 1)

// console.log(cart.changeItemQuantity(redmiNote5A, 2))
// console.log(cart.setPercentageCartDiscount(15))
console.log(cart.getCartSummary())


// console.log(cart.showCart())