import {
    CartItem
} from './CartItem.js';
import {
    Cart
} from './Cart.js';



const s21Ultra = new CartItem("Samsung S21 Ultra", "mobile phones", 5000, 199)
const iPhone13ProMax = new CartItem("iPhone13 Pro Max", "mobile phones", 5500, 99)
const redmiNote5A = new CartItem("Redmi Note 5A", "mobile phones", 1500, 49)
const vivoX60 = new CartItem("Vivo X60", "mobile phones", 3900, 49)

const cart = new Cart

cart.addToCart(s21Ultra, 1)
cart.addToCart(iPhone13ProMax, 1)
cart.addToCart(redmiNote5A, 2)


console.log(cart.removeFromCart(vivoX60))
// console.log(cart.setPercentageCartDiscount(15))
// console.log(cart.getCartSummary())


console.log(cart.showCart())