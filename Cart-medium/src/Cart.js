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
        this.cart = [] // poprawic nazwe
        this.positionsInCart = 0
        this.discountPercentage = 0
        this.discountCodes = []
        // this.discountCodeAmount = 0
        this.totalCartAmount = 0;
        this.id = uuidv4()
    }

    addCartItem = (newCartItem, quantity = 1) => {
        //w cart produkt pokazuje jako tablice[item]??
        Validator.throwErrorIfValueHasIncorrectInstance(newCartItem, CartItem)

        const isCartItemAlreadyExists = this.cart.find(existingCartItem => {
            if (existingCartItem.id === newCartItem.id) {
                let updatedQuantity = existingCartItem.quantity += quantity
                existingCartItem.changeQuantity(updatedQuantity)
                return true
            }
            return false
        })

        if (!isCartItemAlreadyExists) {
            this.cart.push(newCartItem)
            newCartItem.changeQuantity(quantity)
        }


        // isCartExist = true / false

        // if true = dodaje quantit
        // if false = dodaej element
    }

    removeCartItem = (removedCartItem, quantity) => {
        Validator.throwErrorIfValueHasIncorrectInstance(removedCartItem, CartItem)
        Validator.throwErrorIfItemNotExists(removedCartItem, this.cart)

        if (!quantity || removedCartItem.quantity - quantity <= 0) {
            return this.cart = this.cart.filter(cartItem => cartItem.id !== removedCartItem.id)
        }

        this.cart.find(existingCartItem => {
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
        Validator.throwErrorIfDiscountCodeNotExists(providedCode, this.discountCodes)

        // this.discountCodes.find((obj, index) => {
        //     const test = Object.entries(obj)
        //     for (const [key, value] of test) {
        //         console.log(key, value)
        //     }
        // })
        //Object.entries

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
        this.totalCartAmount = this.cart.reduce((acc, cartItem) => {
            return (acc + cartItem.getTotalAmount())
        }, 0)

        this.totalCartAmount = this.totalCartAmount - this.getDiscountPercentAmount() - this.discountCodeAmount

        if (this.totalCartAmount < 0) {
            return this.totalCartAmount = 0
        }

        return Math.round(this.totalCartAmount)
    }
}