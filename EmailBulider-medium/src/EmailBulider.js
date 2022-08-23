import {
    Validator
} from "./Validator.js"
import {
    Email
} from "./Email.js"

// Stwórz metody które będą zmieniać parametry from, to, title, cc, bcc, html
export class EmailBuilder {
    constructor(from, to) {
        Validator.checkEmailFormat(from)
        Validator.checkEmailFormat(to)
        this.from = from
        this.to = to
        this.email = new Email(this.from, this.to)
    }

    reset = () => {
        // wyczyscic bulidera do zera
        this.email = new Email("", "")
    }

    setCC = (newCC) => {
        Validator.checkEmailFormat(newCC)
        this.email.cc = newCC
        return this
    }

    setBcc = (newBcc) => {
        Validator.checkEmailFormat(newBcc)
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
        const resultEmail = this.email
        this.reset()
        return resultEmail
    }
}