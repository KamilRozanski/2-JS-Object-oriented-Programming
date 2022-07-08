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
        this.cartDiscount = 0
        this.discountCode;
        this.totalCartAmount = 0
        this.id = uuidv4()
    }

    addToCart = (item) => {
        Validator.isInstanceOf(item, CartItem)
        Validator.isItemExistsAdd(item, this.cart)
        this.cart.push(item)
        this.quantity++
    }

    removeFromCart = (item) => {
        Validator.isInstanceOf(item, CartItem)
        Validator.isItemExistsRemove(item, this.cart)
        this.cart = this.cart.filter(el => el.id !== item.id)
        this.quantity--
    }

    changeItemsQuantity = (item, quantity) => {
        Validator.isInstanceOf(item, CartItem)
        Validator.isNumber(quantity)
        item.changeQuantity(quantity)
    }

    setDiscountCode = () => {
        //....
    }

    getCartSummary = () => {
        const totalCartAmount = this.cart.reduce((acc, price, index) => {
            price = this.cart[index].item.price
            const itemQuantity = this.cart[index].quantity
            const itemDiscount = (price / 100) * this.cart[index].discount
            return acc += (price - itemDiscount) * itemQuantity
        }, 0)
        return totalCartAmount
        // const cartDiscountAmount = Utilties.changePercentToAmount(this.percentageDiscount, totalCartAmount)
        // return Math.round(this.totalCartAmount = totalCartAmount - cartDiscountAmount)
    }
}