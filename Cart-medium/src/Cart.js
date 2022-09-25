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
        this.productsInCart = [] // name to corrert
        this.discountPercentage = 0
        this.discountCodes = []
        this.totalCartAmount = 0;
        this.id = uuidv4()
    }

    addCartItem = (newCartItem, quantity = 1) => {
        //cart items shows item like array[item]??
        Validator.throwErrorIfValueHasIncorrectInstance(newCartItem, CartItem)
        Validator.throwErrorIfValueisNotAPositiveNumber(quantity)
        Validator.throwErrorIfValueIsNotAInteger(quantity)

        const isCartItemExist = this.productsInCart.some(existingCartItem => newCartItem.id === existingCartItem.id)
        //[poprawic nazwe]
        if (!isCartItemExist) {
            newCartItem.changeQuantity(quantity)
            this.productsInCart.push(newCartItem)
        }

        if (isCartItemExist) {
            const existingCartItem = this.productsInCart.find(existingCartItem => existingCartItem.id === newCartItem.id)

            const updatedQuantity = existingCartItem.quantity += quantity
            existingCartItem.changeQuantity(updatedQuantity)
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
                const updatedQuantity = existingCartItem.quantity -= quantity
                existingCartItem.changeQuantity(updatedQuantity)
            }
        })
    }

    changeCartItemQuantity = (cartItem, quantity) => {
        Validator.throwErrorIfValueHasIncorrectInstance(cartItem, CartItem)
        Validator.throwErrorIfValueisNotAPositiveNumber(quantity)
        Validator.throwErrorIfValueIsNotAInteger(quantity)

        cartItem.changeQuantity(quantity)
    }

    setCartDiscountPercentage = (cartDiscountPercentage) => {
        Validator.throwErrorIfValueisNotAPositiveNumber(cartDiscountPercentage)
        Validator.throwErrorIfIncorrectDiscountPercentage(cartDiscountPercentage)

        this.discountPercentage = cartDiscountPercentage
    }

    getCartDiscountAmount = () => {
        return this.totalCartAmount * this.discountPercentage / 100
    }

    // setDiscountCode = (code, discountCodePercentage) => {
    //     Validator.throwErrorIfValueIsNotAString(code)
    //     Validator.throwErrorIfStringHasOnlyWhiteCharacters(code)
    //     Validator.throwErrorIfValueisNotAPositiveNumber(discountCodePercentage)
    //     Validator.throwErrorIfIncorrectDiscountPercentage(discountCodePercentage)

    //     this.discountCodes.push({
    //         code,
    //         discountCodePercentage
    //     })
    // }

    applyDiscountCode = (providedCode) => {
        Validator.throwErrorIfValueIsNotAString(providedCode)
        Validator.throwErrorIfStringHasOnlyWhiteCharacters(providedCode)
        Validator.throwErrorIfDiscountCodeNotExists(providedCode, this.discountCodes)

        this.discountCodes.find(({
            code,
            discountCodePercentage
        }) => {
            if (code === providedCode) {
                // console.log(discountCodePercentage)

            }
        })
    }

    getDiscountCodeAmount = () => {
        //...
    }

    getTotalAmount = () => {
        this.totalCartAmount = this.productsInCart.reduce((acc, cartItem) => {
            return (acc + cartItem.getTotalAmount())
        }, 0)

        this.totalCartAmount = this.totalCartAmount - this.getDiscountCodeAmount() - this.getCartDiscountAmount()

        if (this.totalCartAmount < 0) {
            return this.totalCartAmount = 0
        }

        return Math.round(this.totalCartAmount)
    }
}