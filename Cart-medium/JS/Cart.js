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
        Validator.priceSmallerThenDiscount(price, discount)

        this.name = name
        this.category = category
        this.price = price
        this.discount = discount
        this.id = uuidv4()
    }

    addItem = (item) => {
        Validator.isInstanceOf(item, CartItem)
    }
    changeName = (newName) => {
        Validator.isString(newName)
        this.newName = newName
    }
    changePrice = (newPrice) => {
        Validator.isNumber(newPrice)
        Validator.priceSmallerThenDiscount(this.price, this.discount)
        this.price = newPrice
    }
    changeDiscount = (newDiscount) => {
        Validator.isNumber(newDiscount)
        Validator.priceSmallerThenDiscount(this.price, this.discount)
        this.discount = newDiscount
    }
    getProcentageDiscount = () => {
        Math.round((this.discount * 100) / this.price)
    }


}