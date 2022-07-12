import {
    Email
} from "./Email.js"

// Stwórz metody które będą zmieniać parametry from, to, title, cc, bcc, html
export class EmailBuilder {
    constructor(email) {
        this.email = email
    }

    changeFrom = (newFrom) => {
        this.email.from = newFrom
    }

    changeTo = (newTo) => {
        this.email.to = newTo
    }

    changeTo = (newTo) => {
        this.email.to = newTo
    }

    changeCC = (newBcc) => {
        this.email.bcc = newBcc
    }

    changeTitle = (newTitle) => {
        this.email.title = newTitle
    }

    changeHTML = (newHTML) => {
        this.email.html = newHTML
    }
}