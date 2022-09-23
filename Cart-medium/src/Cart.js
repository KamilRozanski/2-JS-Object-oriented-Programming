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
        this.cartOfItems = [] // name to corrert
        this.positionsInCart = 0
        this.discountPercentage = 0
        this.discountCodes = []
        // this.discountCodeAmount = 0
        this.totalCartAmount = 0;
        this.id = uuidv4()
    }

    addCartItem = (newCartItem, quantity = 1) => {
        //cart items shows item like array[item]??
        Validator.throwErrorIfValueHasIncorrectInstance(newCartItem, CartItem)
        Validator.throwErrorIfValueisNotAPositiveNumber(quantity)
        Validator.throwErrorIfValueIsNotAInteger(quantity)

        const isCartExist = this.cartOfItems.some(existingCartItem => newCartItem.id === existingCartItem.id)

        if (!isCartExist) {
            newCartItem.changeQuantity(quantity)
            this.cartOfItems.push(newCartItem)
        }

        if (isCartExist) {
            this.cartOfItems.find(existingCartItem => {
                if (existingCartItem.id === newCartItem.id) {
                    const updatedQuantity = existingCartItem.quantity += quantity
                    existingCartItem.changeQuantity(updatedQuantity)
                }
            })
        }
    }

    removeCartItem = (removedCartItem, quantity) => {
        Validator.throwErrorIfValueHasIncorrectInstance(removedCartItem, CartItem)
        Validator.throwErrorIfItemNotExists(removedCartItem, this.cartOfItems)

        if (!quantity || removedCartItem.quantity - quantity <= 0) {
            return this.cartOfItems = this.cartOfItems.filter(cartItem => cartItem.id !== removedCartItem.id)
        }

        this.cartOfItems.find(existingCartItem => {
            if (existingCartItem.id === removedCartItem.id) {
                const updatedQuantity = existingCartItem.quantity -= quantity
                existingCartItem.changeQuantity(updatedQuantity)
            }
        })
    }

    changeCartItemQuantity = (cartItem, quantity) => {
        Validator.throwErrorIfValueHasIncorrectInstance(cartItem, CartItem)

        cartItem.changeQuantity(quantity)
    }

    setCartDiscountPercentage = (cartDiscountPercentage) => {
        Validator.throwErrorIfValueisNotAPositiveNumber(cartDiscountPercentage)
        Validator.throwErrorIfDiscountIsNotBetweenZeroToOneHundred(cartDiscountPercentage)

        this.discountPercentage = cartDiscountage
    }

    setDiscountCode = (code, discountPercentage) => {
        Validator.throwErrorIfValueIsNotAString(code)
        Validator.throwErrorIfStringHasOnlyWhiteCharacters(code)
        Validator.throwErrorIfValueisNotAPositiveNumber(discountPercentage)
        Validator.throwErrorIfDiscountPercentageIsNotBetweenZeroToOneHundred(discountPercentage)
        //discount code already exists

        this.discountCodes.push({
            code,
            discountPercentage
        })
    }

    applyDiscountCode = (providedCode) => {
        Validator.throwErrorIfValueIsNotAString(providedCode)
        Validator.throwErrorIfStringHasOnlyWhiteCharacters(providedCode)
        Validator.throwErrorIfDiscountCodeNotExists(providedCode, this.discountCodes)

        this.discountCodes.find(({
            code,
            discountPercentage
        }) => {
            if (code === providedCode) {
                this.discountCodeAmount = discountPercentage
            }
        })
    }

    getDiscountPercentAmount = () => {
        return this.totalCartAmount * this.discountPercent / 100
    }

    getTotalAmount = () => {
        //poprawic nazwe metody
        // Math.round(this.totalCartAmount) nie zaokrągla ???
        this.totalCartAmount = this.cartOfItems.reduce((acc, cartItem) => {
            return (acc + cartItem.getTotalAmount())
        }, 0)

        this.totalCartAmount = this.totalCartAmount - this.getDiscountPercentAmount() - this.discountCodeAmount

        if (this.totalCartAmount < 0) {
            return this.totalCartAmount = 0
        }

        return Math.round(this.totalCartAmount)
    }
}