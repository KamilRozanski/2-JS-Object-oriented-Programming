import {
    Validator
} from "./Validator.js"

export class Email {
    constructor(from, to) {
        // Validator.checkEmailFormat(from)
        // Validator.checkEmailFormat(to)
        Validator.isString(from)
        Validator.isString(to)
        this.from = from
        this.to = to
    }
}