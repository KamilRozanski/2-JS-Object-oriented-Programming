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

        this.name = name
        this.category = category
        this.price = price
        this.discount = discount
        this.id = uuidv4()
    }

    addItem = (item) => {
        Validator.isInstanceOf(item, CartItem)
        console.log(item)
    }
    getProcentageDiscount = () => {
        const result = (this.price - this.discount) / this.price * 100
        console.log(Math.round(result))
        // return this.price * this.discount
    }
    changePrice = (newPrice) => {
        Validator.isNumber(newPrice)
        this.price = newPrice
    }


}