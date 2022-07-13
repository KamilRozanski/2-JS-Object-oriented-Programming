import {
    Email
} from "./Email.js"

import {
    EmailBuilder
} from "./EmailBulider.js"

const mail = new EmailBuilder(new Email("motomc1@gmail.com", "sender@sender", {
    title: "Kamil",
    cc: "dominika@o2.pl",
    bcc: "halina@wp.pl",
    html: "hello"
}))
console.log(mail.bulidEmail())
// console.log(mail)