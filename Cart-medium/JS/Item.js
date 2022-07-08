import {
    v4 as uuidv4
} from 'uuid';
import {
    Validator
} from './Validator.js';


export class Item {
    constructor(name, price) {
        Validator.isString(name)
        Validator.isNumber(price)
        Validator.checkPrice(price)
        this.name = name
        this.price = price
        this.id = uuidv4()
    }

    changeName = (newName) => {
        Validator.isString(newName)
        this.name = newName
    }
    changePrice = (newPrice) => {
        Validator.isNumber(newPrice)
        Validator.checkPrice(newPrice)
        this.price = newPrice
    }
}