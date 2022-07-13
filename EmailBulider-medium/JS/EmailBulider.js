import {
    Validator
} from "./Validator.js"
import {
    Email
} from "./Email.js"

// Stwórz metody które będą zmieniać parametry from, to, title, cc, bcc, html
export class EmailBuilder {
    constructor(email) {
        Validator.isInstanceOf(email, Email)
        this.email = email
    }

    changeFrom = (newFrom) => {
        Validator.checkEmail(newFrom)
        this.email.from = newFrom
    }

    changeTo = (newTo) => {
        Validator.checkEmail(newTo)
        this.email.to = newTo
    }

    changeCC = (newCC) => {
        Validator.checkEmail(newCC)
        this.email.cc = newCC
    }

    changeBcc = (newBcc) => {
        Validator.checkEmail(newBcc)
        this.email.bcc = newBcc
    }

    changeTitle = (newTitle) => {
        Validator.isString(newTitle)
        this.email.title = newTitle
    }

    changeHTML = (newHTML) => {
        Validator.isString(newHTML)
        this.email.html = newHTML
    }

    bulidEmail = () => {
        return this.email
    }
}