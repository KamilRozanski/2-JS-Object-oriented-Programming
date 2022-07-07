import {
    v4 as uuidv4
} from 'uuid';
import {
    Validator
} from './Validator.js';




// Ma miec: Nazwę, Kategorię, Cenę, Rabat % na przedmiot, uuid
// Ma umożliwiać: 
// - modyfikować cenę przedmiotu
// - określać jego rabat procentowy
// - dodawać produkt do kategorii
// - zmianę nazwy, ceny lub rabatu

export class CartItem {
    constructor(name, category, price, discount) {
        Validator.isString(name)
        Validator.isString(category)
        Validator.isNumber(discount)
        Validator.isNumber(price)
        Validator.checkDiscountAmount(price, discount)


        this.name = name
        this.category = category
        this.price = price
        this.discount = discount
        this.quantity = 0
        this.id = uuidv4()
    }

    addItemToCategory = (newCategory) => {
        Validator.isInstanceOf(item, CartItem)
        this.category = newCategory
    }
    changeName = (newName) => {
        Validator.isString(newName)
        this.newName = newName
    }
    changePrice = (newPrice) => {
        Validator.isNumber(newPrice)
        Validator.checkDiscountAmount(this.price, this.discount)
        this.price = newPrice
    }
    changeDiscount = (newDiscount) => {
        Validator.isNumber(newDiscount)
        Validator.checkDiscountAmount(this.price, this.discount)
        this.discount = newDiscount
    }
    changeQuantity = (quantity) => {
        Validator.isNumber(quantity)
        Validator.isQuantityBiggerThanZero(quantity)

        this.quantity = quantity
    }
    getProcentageDiscount = () => {
        return Math.round((this.discount * 100) / this.price)
    }


}