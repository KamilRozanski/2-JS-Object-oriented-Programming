import {
    Validator
} from "./Validator.js"

export class Utilities {
    static pushToArray = (value, array) => {
        Validator.canPushValueToArray(value)
        Validator.isArray(array)
        array.push(value)
    }
}