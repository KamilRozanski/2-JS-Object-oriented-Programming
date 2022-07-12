import {
    Email
} from "./Email.js"

import {
    EmailBuilder
} from "./EmailBulider.js"

const mail = new EmailBuilder(new Email("motomc@", "sender@sender"))
console.log(mail.changeCC("elo"))
console.log(mail)