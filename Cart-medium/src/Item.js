import {
    v4 as uuidv4
} from 'uuid';
import {
    Validator
} from './Validator.js';


export class Item {
    constructor(name, category, price) {
        Validator.throwErrorIfValueIsNotAString(name)
        Validator.throwErrorIfStringHasOnlyWhiteCharacters(name)
        Validator.throwErrorIfValueisNotAPositiveNumber(price)
        Validator.throwErrorIfValueIsNotAString(category)
        Validator.throwErrorIfStringHasOnlyWhiteCharacters(category)

        this.name = name
        this.price = price
        this.category = category
        this.id = uuidv4()
    }

    changeName = (newName) => {
        Validator.throwErrorIfValueIsNotAString(newName)
        Validator.throwErrorIfStringHasOnlyWhiteCharacters(newName)

        this.name = newName
    }

    changePrice = (newPrice) => {
        Validator.throwErrorIfValueisNotAPositiveNumber(newPrice)

        this.price = newPrice
    }

    changeCategory = (newCategory) => {
        Validator.throwErrorIfValueIsNotAString(newCategory)
        Validator.throwErrorIfStringHasOnlyWhiteCharacters(newCategory)

        this.category = newCategory
    }

    getPrice = () => {
        return this.price
    }
}