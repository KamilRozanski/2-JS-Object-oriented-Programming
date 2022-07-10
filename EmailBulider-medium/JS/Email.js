export class Email {
    constructor(from, to, {
        title,
        cc,
        bcc,
        html
    } = {}) {
        this.from = from
        this.to = to
        this.title = title
        this.cc = [cc]
        this.bcc = [bcc]
        this.html = html
    }
}

const newEmail = new Email("motomc", "sender@sender", {
    title: "title",
    cc: "cc@cc",
    bcc: "bcc@bbc",
    html: "Hello"
})
console.log(newEmail)