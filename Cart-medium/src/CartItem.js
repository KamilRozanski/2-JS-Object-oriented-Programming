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
        Validator.checkDiscountValue(discount)

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

    changeDiscountProcentage = (newDiscount) => {
        Validator.isNumber(newDiscount)
        Validator.checkDiscount(newDiscount)
        this.discount = newDiscount
    }

    changeQuantity = (quantity) => {
        Validator.isNumber(quantity)
        Validator.checkQuantity(quantity)
        this.quantity = quantity
    }
}