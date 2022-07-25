import {
    Validator
} from "./Validator.js"

export class Utilties {
    static isExists = (value, array) => {
        return array.some(el => value.id === el.id)

    }
}