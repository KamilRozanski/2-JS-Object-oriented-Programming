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
    constructor(item, quantity = 1, category, discount) {
        Validator.isInstanceOf(item, Item)
        Validator.isString(category)
        Validator.isNumber(discount)
        Validator.checkDiscount(discount)

        this.item = item
        this.category = category
        this.discount = discount
        this.quantity = quantity
        this.id = uuidv4()
    }

    changeCategory = (newCategory) => {
        Validator.isInstanceOf(item, Item)
        Validator.isString(newCategory)
        this.category = newCategory
    }

    changeName = (newName) => {
        Validator.isString(newName)
        this.item.changeName(newName)
    }

    changePrice = (newPrice) => {
        Validator.isNumber(newPrice)
        this.item.changePrice(newPrice)
    }

    changeDiscountProcentage = (newDiscount) => {
        Validator.isNumber(newDiscount)
        Validator.checkDiscount(newDiscount)
        this.discount = newDiscount
    }

    changeQuantity = (quantity) => {
        Validator.isNumber(quantity)
        this.quantity = quantity
    }
}