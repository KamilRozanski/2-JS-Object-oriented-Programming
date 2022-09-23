import {
    Validator
} from "./Validator.js"

export class Email {
    constructor(from, to) {
        Validator.isString(from)
        Validator.isString(to)
        
        this.from = from
        this.to = to
    }
}