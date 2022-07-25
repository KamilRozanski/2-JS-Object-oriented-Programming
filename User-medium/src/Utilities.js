import {
    Validator
} from "./Validator.js"

export class Utilities {
    static pushToArray = (value, array) => {
        Validator.isArray(array)
        array.push(value)
    }
}