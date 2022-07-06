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
        this.percentageDiscount = 0
        this.totalCartAmount = 0
        this.id = uuidv4()
    }

    addToCart = (item, quantity) => {
        Validator.isInstanceOf(item, CartItem)
        Validator.isNumber(quantity)
        Validator.isQuantityBiggerThanZero(quantity)
        this.cart.push(item)
        item.quantity = quantity
    }
    removeFromCart = (item) => {
        //sprawdzic jakie ilości danego przedmotu usuwamy
        Validator.isInstanceOf(item, CartItem)
        Validator.isItemExists(item, this.cart)
        this.cart = this.cart.filter(el => el.id !== item.id)
        this.quantity--
    }

    setPercentageCartDiscount = (value) => {
        Validator.isNumber(value)
        Validator.checkDiscountPercentage(value)
        const totalCartAmount = this.getCartSummary()
        this.percentageDiscount = value / 100 * totalCartAmount
    }
    getCartSummary = () => {
        const calculeteTotalAmount = this.cart.reduce((acc, price, index) => {
            price = this.cart[index].price
            const itemQuantity = this.cart[index].quantity
            const itemDiscount = this.cart[index].discount
            return acc += (price - itemDiscount) * itemQuantity
        }, 0)
        return Math.round(this.totalCartAmount = calculeteTotalAmount - this.percentageDiscount)
    }
    showCart = () => {
        return this.cart
    }
}