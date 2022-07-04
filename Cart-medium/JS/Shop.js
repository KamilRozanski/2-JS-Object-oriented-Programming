import {
    CartItem
} from './Cart.js';


const phone = new CartItem("Samsung", "mobile phones", 100, 10)
phone.getProcentageDiscount()
phone.addItem(phone)
phone.changePrice(1)
console.log(phone)