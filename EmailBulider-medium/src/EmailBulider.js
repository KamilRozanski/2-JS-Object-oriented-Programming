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

    reset = () => {
        //dodac metode reset
        this.email = new Email(this.from, this.to)
    }
}





export class EmailBuilderTwo {
    constructor(from, to, {
        cc,
        bcc,
        title,
        HTML
    } = {}) {
        this.from = from
        this.to = to
        this.cc = cc
        this.bcc = bcc
        this.title = title
        this.HTML = HTML
    }
}