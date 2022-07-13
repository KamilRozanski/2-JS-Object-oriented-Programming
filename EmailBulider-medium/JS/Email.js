import {
    Validator
} from "./Validator.js"

export class Email {
    constructor(from, to, {
        title,
        cc,
        bcc,
        html
    } = {}) {
        Validator.isString(from)
        Validator.isString(to)
        this.from = from
        this.to = to
        this.title = title
        this.cc = [cc]
        this.bcc = [bcc]
        this.html = html
    }
}