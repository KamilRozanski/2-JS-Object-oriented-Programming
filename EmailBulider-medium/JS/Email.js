import {
    Validator
} from "./Validator.js"

export class Email {
    constructor(from, to) {
        Validator.requiredValue(from)
        Validator.requiredValue(to)
        Validator.checkEmail(from)
        Validator.checkEmail(to)
        this.from = from
        this.to = to
    }
}