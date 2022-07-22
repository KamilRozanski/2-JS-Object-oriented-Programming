import {
    Validator
} from "./Validator.js"

export class Utilties {
    static isExistsBoolien = (value, array) => {
        return array.some(el => value.id === el.id)

    }
}