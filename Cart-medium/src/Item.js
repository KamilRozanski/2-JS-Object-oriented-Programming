import {
    v4 as uuidv4
} from 'uuid';
import {
    Validator
} from './Validator.js';


export class Item {
    constructor(name, category, price) {
        Validator.throwErrorIfValueIsNotAString(name)
        Validator.throwErrorIfStringCharactersAreNotALetters(name)
        Validator.throwErrorIfValueisNotAPositiveNumber(price)
        Validator.throwErrorIfValueIsNotAString(category)

        this.name = name
        this.price = price
        this.category = category
        this.id = uuidv4()
    }

    changeName = (newName) => {
        Validator.throwErrorIfValueIsNotAString(newName)
        Validator.throwErrorIfStringCharactersAreNotALetters(newName)

        this.name = newName
    }

    changePrice = (newPrice) => {
        Validator.throwErrorIfValueisNotAPositiveNumber(newPrice)

        this.price = newPrice
    }

    changeCategory = (newCategory) => {
        Validator.throwErrorIfValueIsNotAString(newCategory)

        this.category = newCategory
    }

    getPrice = () => {
        return this.price
    }
}