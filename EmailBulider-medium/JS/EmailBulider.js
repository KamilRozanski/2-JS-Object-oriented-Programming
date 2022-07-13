import {
    Validator
} from "./Validator.js"
import {
    Email
} from "./Email.js"

// Stwórz metody które będą zmieniać parametry from, to, title, cc, bcc, html
export class EmailBuilder {
    constructor(email) {
        Validator.isString(email)
        this.email = email
    }

    changeFrom = (newFrom) => {
        Validator.isString(newFrom)
        this.email.from = newFrom
    }

    changeTo = (newTo) => {
        Validator.isString(newTo)
        this.email.to = newTo
    }

    changeCC = (newBcc) => {
        Validator.isString(newBcc)
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
}