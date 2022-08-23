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
    v4 as uuidv4
} from 'uuid';

export class Cart {
    constructor() {
        this.cart = []
        this.positionsInCart = 0 // poprawic nazwe
        this.discountPercent = 0
        this.discountCode = []
        this.discountCodeAmount = 0
        this.totalCartAmount = 0;
        this.id = uuidv4()
    }

    addCartItem = (cartItem, quantity = 1) => {
        //w cart produkt pokazuje jako tablice[item]??
        Validator.isInstanceOf(cartItem, CartItem)
        // Validator.isItemAlreadyExists(cartItem, this.cart)
        let quantityTest = 0
        this.cart = this.cart.filter(el => {
            // console.log(cartItem.id === el.id)
            // console.log(cartItem.id, el.id)
            // console.log(cartItem, el)
            if (cartItem.id === el.id) {
                console.log(quantity)
                // this.cart.push(cartItem)
                el.changeQuantity(quantity)
            }
        })

        // console.log(cartItem.id)
        // console.log(this.cart)
        this.cart.push(cartItem)
        cartItem.changeQuantity(quantity)
    }

    removeCartItem = (cartItem) => {
        Validator.isInstanceOf(cartItem, CartItem)
        Validator.throwErrorIfItemNotExists(cartItem, this.cart)

        this.cart = this.cart.filter(el => el.id !== cartItem.id)
    }

    changeCartItemQuantity = (cartItem, quantity) => {
        //poprawic quantity
        Validator.isInstanceOf(cartItem, CartItem)
        Validator.isNumber(quantity)
        Validator.isQuantitySmallerThanZero(quantity)

        quantity !== 0 ? cartItem.changeQuantity(quantity) : this.removeItem(cartItem)
    }

    setCartDiscountPercent = (cartDiscount) => {
        Validator.isNumber(cartDiscount)
        Validator.checkDiscountValue(cartDiscount)

        this.discountPercent = cartDiscount
    }

    setDiscountCode = (code, discountCodeAmount) => {
        Validator.isString(code)
        Validator.isNumber(discountCodeAmount)
        Validator.throwErrorIfDiscountCodeValueIsIncorrect(discountCodeAmount, this.getAmountSummary())
        this.discountCode.push({
            code,
            discountCodeAmount
        })
    }

    applayDiscountCode = (providedCode) => {
        Validator.isString(providedCode)
        Validator.throwErrorIfDiscountCodeNotExists(providedCode, this.discountCode)
        //Object.entres
        this.discountCode.find(({
            code,
            discountCodeAmount
        }) => {
            if (code === providedCode) {
                this.discountCodeAmount = discountCodeAmount
            }
        })
    }

    getDiscountPercentAmount = () => {
        return this.totalCartAmount * this.discountPercent / 100
    }

    getAmountSummary = () => {
        //poprawiz nazw
        this.totalCartAmount = this.cart.reduce((acc, cartItem) => {
            return (acc + cartItem.getAmountSummary())
        }, 0)
        this.totalCartAmount = this.totalCartAmount - this.getDiscountPercentAmount() - this.discountCodeAmount
        return Math.round(this.totalCartAmount)
    }
}