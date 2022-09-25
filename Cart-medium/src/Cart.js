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
        this.productsInCart = []
        this.discountPercentage = 0
        this.discountsCodes = [{
            code: "spring",
            discount: 20
        }, {
            code: "winter",
            discount: 10
        }]
        this.totalCartAmount = 0;
        this.id = uuidv4()
    }

    addCartItem = (newCartItem, quantity = 1) => {
        //cart items shows item like array[item]??
        Validator.throwErrorIfValueHasIncorrectInstance(newCartItem, CartItem)
        Validator.throwErrorIfValueisNotAPositiveNumber(quantity)
        Validator.throwErrorIfValueIsNotAInteger(quantity)

        const isCartItemExists = this.productsInCart.some(existingCartItem => newCartItem.id === existingCartItem.id)

        if (!isCartItemExists) {
            newCartItem.changeQuantity(quantity)
            this.productsInCart.push(newCartItem)
        }

        if (isCartItemExists) {
            const existingCartItem = this.productsInCart.find(existingCartItem => existingCartItem.id === newCartItem.id)

            existingCartItem.changeQuantity(existingCartItem.quantity += quantity)
        }
    }

    removeCartItem = (removedCartItem, quantity) => {
        Validator.throwErrorIfValueHasIncorrectInstance(removedCartItem, CartItem)
        Validator.throwErrorIfItemNotExists(removedCartItem, this.productsInCart)

        if (!quantity || removedCartItem.quantity - quantity <= 0) {
            return this.productsInCart = this.productsInCart.filter(cartItem => cartItem.id !== removedCartItem.id)
        }

        this.productsInCart.forEach(existingCartItem => {
            if (existingCartItem.id === removedCartItem.id) {
                existingCartItem.changeQuantity(existingCartItem.quantity -= quantity)
            }
        })
    }

    changeCartItemQuantity = (cartItem, quantity) => {
        Validator.throwErrorIfValueHasIncorrectInstance(cartItem, CartItem)
        Validator.throwErrorIfValueisNotAPositiveNumber(quantity)
        Validator.throwErrorIfValueIsNotAInteger(quantity)

        cartItem.changeQuantity(quantity)
    }

    applyDiscountCode = (providedCode) => {
        Validator.throwErrorIfValueIsNotAString(providedCode)
        Validator.throwErrorIfStringHasOnlyWhiteCharacters(providedCode)
        Validator.throwErrorIfDiscountCodeNotExists(providedCode, this.discountsCodes)

        this.discountsCodes.forEach(discountCode => {
            for (const [key, value] of Object.entries(discountCode)) {
                if (value === providedCode) {
                    this.discountPercentage = discountCode.discount
                }
            }
        })
    }

    calculateTotalAmount = () => {
        this.totalCartAmount = this.productsInCart.reduce((acc, cartItem) => {
            return (acc + cartItem.getTotalAmount())
        }, 0)

        if (this.discountPercentage > 0) {
            this.totalCartAmount = this.totalCartAmount - (this.totalCartAmount * this.discountPercentage / 100)
        }

        if (this.totalCartAmount < 0) {
            this.totalCartAmount = 0
        }

        return this.totalCartAmount = this.totalCartAmount.toFixed(2)
    }
}