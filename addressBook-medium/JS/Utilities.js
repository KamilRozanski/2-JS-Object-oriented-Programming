import {
    Validator
} from "./Validator.js"

export class Utilties {
    static isContactExists = (contact, array) => {
        Validator.isArray(array)
        return array.some(el => contact.id === el.id)
    }
}