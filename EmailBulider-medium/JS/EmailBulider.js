import {
    Validator
} from "./Validator.js"
import {
    Email
} from "./Email.js"

// Stwórz metody które będą zmieniać parametry from, to, title, cc, bcc, html
export class EmailBuilder {
    constructor(from, to) {
        this.email = new Email(from, to)
    }

    setCC = (newCC) => {
        Validator.checkEmail(newCC)
        this.email.cc = newCC
        return this
    }

    setBcc = (newBcc) => {
        Validator.checkEmail(newBcc)
        this.email.bcc = newBcc
        return this
    }

    setTitle = (newTitle) => {
        Validator.isString(newTitle)
        this.email.title = newTitle
        return this
    }

    setHTML = (newHTML) => {
        Validator.isString(newHTML)
        this.email.html = newHTML
        return this
    }

    bulidEmail = () => {
        return this.email
    }
}