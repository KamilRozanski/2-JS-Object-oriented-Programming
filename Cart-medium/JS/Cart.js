import {
    CartItem
} from "./CartItem.js";
import {
    Validator
} from './Validator.js';
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
        this.id = uuidv4()
    }

    addToCart = (item) => {
        Validator.isInstanceOf(item, CartItem)
        this.cart.push(item)
        this.quantity++
    }
    removeFromCart = (item) => {
        Validator.isInstanceOf(item, CartItem)
        this.cart = this.cart.filter(el => el.id !== item.id)
        this.quantity--
    }
    getCartSummary = () => {
        return this.cart.reduce((acc, price, index) => {
            price = this.cart[index].price
            const discount = this.cart[index].discount
            return acc += price - discount
        }, 0)
    }
    setDiscoundCode = (code, amountOfDiscount) => {

    }
    showCart = () => {
        return this.cart
    }
}