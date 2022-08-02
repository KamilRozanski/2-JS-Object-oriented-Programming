import {
    Item
} from "./Item.js";
import {
    CartItem
} from "./CartItem.js";
import {
    Validator
} from './Validator.js';
import {
    Utilties
} from "./Utilties.js";
import {
    v4 as uuidv4
} from 'uuid';

// Ma mieć: uuid, listę wybranych przedmiotów, rabat % na koszyk, kod rabatowy
// Ma umożliwiać: 
// - dodawanie/usuwanie przedmiotów do/z koszyka
// - zmianę ilości produktu w koszyku
// - podliczać wartość koszyka uwzględniajac rabaty

export class Cart {
    constructor() {
        this.cart = []
        this.quantity = 0
        this.discountPercent = 0
        this.discountCode = ""
        this.totalCartAmount = 0;
        this.id = uuidv4()
    }

    addItem = (item) => {
        Validator.isInstanceOf(item, CartItem)
        Validator.throwErrorIfItemExists(item, this.cart)

        this.cart.push(item)
        this.quantity++
    }

    removeItem = (item) => {
        Validator.isInstanceOf(item, CartItem)
        Validator.throwErrorIfItemNotExists(item, this.cart)

        this.cart = this.cart.filter(el => el.id !== item.id)
        this.quantity--
    }

    changeItemQuantity = (item, quantity) => {
        Validator.isInstanceOf(item, CartItem)
        Validator.isNumber(quantity)
        Validator.isQuantitySmallerThanZero(quantity)

        quantity !== 0 ? item.changeQuantity(quantity) : this.removeItem(item)
    }

    setCartDiscountPercent = (cartDiscount) => {
        Validator.isNumber(cartDiscount)
        Validator.checkDiscountValue(cartDiscount)

        this.discountPercent = cartDiscount
        // this.cartDiscount = this.getCartSummary() / 100 * cartDiscount
    }
    getDiscountAmount = () => {
        return this.totalCartAmount * this.discountPercent / 100
    }

    getDiscountPercent = () => {
        return this.discountPercent
    }

    getAmountSummary = () => {
        this.totalCartAmount = this.cart.reduce((acc, cartItem) => {
            return (acc + cartItem.getAmountSummary())
        }, 0)
        return this.totalCartAmount - this.getDiscountAmount()
    }




}









// //do poprawy
// const totalCartAmount = this.cart.reduce((acc, price, index) => {
//     // const {price} = item;
//     price = this.cart[index].item.price
//     const itemQuantity = this.cart[index].quantity
//     const itemDiscount = (price / 100) * this.cart[index].discount
//     return acc += (price - itemDiscount) * itemQuantity
// }, 0)
// return totalCartAmount - this.cartDiscount