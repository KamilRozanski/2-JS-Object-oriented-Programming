import {
    CartItem
} from './CartItem.js';


const phones = new CartItem("Samsung", "mobile phones", 100, 10)
console.log(phones.getProcentageDiscount())

phones.changePrice(1)
console.log(phones)