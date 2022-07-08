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
    constructor(percentageDiscount, discountCode) {
        Validator.isNumber(percentageDiscount)
        Validator.checkDiscountPercentage(percentageDiscount)
        Validator.isString(discountCode)

        this.cart = []
        this.quantity = 0
        this.percentageDiscount = percentageDiscount
        this.discountCode = discountCode
        this.totalCartAmount = 0
        this.id = uuidv4()
    }

    addToCart = (item, quantity) => {
        Validator.isInstanceOf(item, Item)
        Validator.isNumber(quantity)
        Validator.isQuantityBiggerThanZero(quantity)

        this.cart.push(item)
        item.quantity = quantity
        this.quantity++
    }

    removeFromCart = (item) => {
        Validator.isInstanceOf(item, CartItem)
        Validator.isItemExists(item, this.cart)

        this.cart = this.cart.filter(el => el.id !== item.id)
        this.quantity--
    }

    changeItemQuantity = (item, quantity) => {
        Validator.isInstanceOf(item, CartItem)
        Validator.isNumber(quantity)
        Validator.isQuantityBiggerThanZero(quantity)

        item.changeQuantity(quantity)
    }

    setDiscountCode = () => {
        //....
    }

    getCartSummary = () => {
        const totalCartAmount = this.cart.reduce((acc, price, index) => {
            price = this.cart[index].price
            const itemQuantity = this.cart[index].quantity
            const itemDiscount = this.cart[index].discount
            return acc += (price - itemDiscount) * itemQuantity
        }, 0)
        const cartDiscountAmount = Utilties.changePercentToAmount(this.percentageDiscount, totalCartAmount)
        return Math.round(this.totalCartAmount = totalCartAmount - cartDiscountAmount)
    }

    showCart = () => {
        return this.cart
    }
}