import {
    v4 as uuidv4
} from 'uuid';
import {
    Validator
} from './Validator.js';
import {
    Item
} from "./Item.js";




// Ma miec: Nazwę, Kategorię, Cenę, Rabat % na przedmiot, uuid
// Ma umożliwiać: 
// - modyfikować cenę przedmiotu
// - określać jego rabat procentowy
// - dodawać produkt do kategorii ???
// - zmianę nazwy, ceny lub rabatu

export class CartItem {
    constructor(item, discountPercent = 0) {
        Validator.isInstanceOf(item, Item)
        Validator.isNumber(discountPercent)
        Validator.throwErrorIfDiscountValueIsIncorrect(discountPercent)

        this.item = item
        //kategoria powinna byc w item
        this.discountPercent = discountPercent
        this.quantity = 1
        this.id = uuidv4()
    }

    changeDiscountPercente = (newDiscount) => {
        // dodac domyslna wartosc 
        Validator.isNumber(newDiscount)
        Validator.throwErrorIfDiscountValueIsIncorrect(newDiscount)

        this.discountPercent = discount
    }


    changeQuantity = (newQuantity) => {
        Validator.isNumber(newQuantity)
        Validator.isQuantitySmallerThanZero(newQuantity)

        return this.quantity = newQuantity
    }


    getDiscountAmount = () => {
        return this.item.getPrice() * this.discountPercent / 100
    }

    getTotal = () => {
        //poprawic nazwenictwo
        return (this.item.getPrice() - this.getDiscountAmount()) * this.quantity
    }
}