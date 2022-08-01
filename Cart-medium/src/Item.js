import {
    v4 as uuidv4
} from 'uuid';
import {
    Validator
} from './Validator.js';


export class Item {
    constructor(name, price) {
        Validator.checkStringCharacters(name)
        Validator.isNumber(price)
        Validator.isPriceBiggerThanZero(price)
        this.name = name
        this.price = price
        this.id = uuidv4()
    }

    changeName = (newName) => {
        Validator.checkStringCharacters(newName)
        this.name = newName
    }
    changePrice = (newPrice) => {
        Validator.isNumber(newPrice)
        Validator.isPriceBiggerThanZero(newPrice)
        this.price = newPrice
    }

    getPrice = () => {
        return this.price
    }
}