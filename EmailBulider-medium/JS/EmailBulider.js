import {
    Email
} from "./Email"


class EmailBuilder {
    constructor() {
        this.mail = {
            from: "",
            to: "",
            title: "",
            cc: [],
            bcc: [],
            html: "",
        };
    }


    setFrom = () => {
        return this.mail.from
    }
}

const mail = new EmailBuilder(new Email("motomc", "sender@sender"))
console.log(mail)