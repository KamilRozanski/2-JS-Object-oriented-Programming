import {
    v4 as uuidv4
} from 'uuid';
import {
    Validator
} from './Validator.js';


export class Item {
    constructor(name, category, price) {
        Validator.throwErrorIfStringCharactersAreIncorrect(name)
        Validator.isNumber(price)
        Validator.isPositiveNumber(price)
        Validator.isString(category)

        this.name = name
        this.price = price
        this.category = category
        this.id = uuidv4()
    }

    changeName = (newName) => {
        Validator.throwErrorIfStringCharactersAreIncorrect(newName)

        this.name = newName
    }

    changePrice = (newPrice) => {
        Validator.isNumber(newPrice)
        Validator.isPositiveNumber(newPrice)

        this.price = newPrice
    }

    changeCategory = (newCategory) => {
        Validator.isString(newCategory)

        this.category = newCategory
    }

    getPrice = () => {
        return this.price
    }
}