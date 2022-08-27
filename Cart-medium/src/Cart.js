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

    addCartItem = (newCartItem, quantity = 1) => {
        //w cart produkt pokazuje jako tablice[item]??
        Validator.isInstanceOf(newCartItem, CartItem)

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
    }

    removeCartItem = (removedCartItem, quantity) => {
        Validator.isInstanceOf(removedCartItem, CartItem)
        Validator.throwErrorIfItemNotExists(removedCartItem, this.cart)

        if (quantity === undefined || removedCartItem.quantity - quantity <= 0) {
            return this.cart = this.cart.filter(cartItem => cartItem.id !== removedCartItem.id)
        }

        this.cart.find(existingCartItem => {
            if (existingCartItem.id === removedCartItem.id) {
                let updatedQuantity = existingCartItem.quantity -= quantity
                existingCartItem.changeQuantity(updatedQuantity)
            }
        })
    }

    changeCartItemQuantity = (cartItem, quantity) => {
        Validator.isInstanceOf(cartItem, CartItem)

        cartItem.changeQuantity(quantity)
    }

    setCartDiscountPercent = (cartDiscount) => {
        Validator.isNumber(cartDiscount)
        Validator.checkDiscountValue(cartDiscount)

        this.discountPercent = cartDiscount
    }

    setDiscountCode = (code, discountCodeAmount) => {
        Validator.isString(code)
        Validator.isNumber(discountCodeAmount)
        Validator.throwErrorIfDiscountCodeValueIsIncorrect(discountCodeAmount, this.getTotalAmaunt())
        this.discountCode.push({
            code,
            discountCodeAmount
        })
    }

    applayDiscountCode = (providedCode) => {
        Validator.isString(providedCode)
        Validator.throwErrorIfDiscountCodeNotExists(providedCode, this.discountCode)
        //Object.entres
        this.discountCode.find(obj => {
            for (const [key, value] of Object.entries(obj)) {
                // console.log(`${key} ${providedCode}: ${value}`);

                if (value === providedCode) {
                    console.log(`${key} ${providedCode}: ${value}`);
                    this.discountCodeAmount = value
                }
            }
        })
    }

    getDiscountPercentAmount = () => {
        return this.totalCartAmount * this.discountPercent / 100
    }

    getTotalAmaunt = () => {
        //poprawic nazwe metody
        this.totalCartAmount = this.cart.reduce((acc, cartItem) => {
            return (acc + cartItem.getTotalAmount())
        }, 0)
        this.totalCartAmount = this.totalCartAmount - this.getDiscountPercentAmount() - this.discountCodeAmount
        return Math.round(this.totalCartAmount)
    }
}