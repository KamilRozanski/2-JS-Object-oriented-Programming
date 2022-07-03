import {
    CartItem
} from './Cart.js';


const phone = new CartItem("Samsung", "mobile phones", 799, 700)
phone.getProcentageDiscount()
phone.addItem(phone)