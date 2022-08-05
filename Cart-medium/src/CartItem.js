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
    constructor(item, category, discountPercent) {
        Validator.isInstanceOf(item, Item)
        Validator.isString(category)
        Validator.isNumber(discountPercent)
        Validator.checkDiscountValue(discountPercent)

        this.item = item
        this.category = category
        this.discountPercent = discountPercent
        this.quantity = 1
        this.id = uuidv4()
    }

    changeCategory = (newCategory) => {
        Validator.isInstanceOf(item, Item)
        Validator.isString(newCategory)
        this.category = newCategory
    }

    changeDiscountPercente = (newDiscount) => {
        Validator.isNumber(newDiscount)
        Validator.checkDiscountValue(newDiscount)
        this.discountPercent = discount
    }


    changeQuantity = (newQuantity) => {
        Validator.isNumber(newQuantity)
        Validator.isQuantitySmallerThanZero(newQuantity)
        this.quantity = newQuantity
    }


    getDiscountAmount = () => {
        return this.item.getPrice() * this.discountPercent / 100
    }

    getAmountSummary = () => {
        return (this.item.getPrice() - this.getDiscountAmount()) * this.quantity
    }
}