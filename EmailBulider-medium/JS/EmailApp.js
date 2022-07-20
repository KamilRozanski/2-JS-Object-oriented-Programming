import {
    Email
} from "./Email.js"

import {
    EmailBuilder
} from "./EmailBulider.js"


const kamilEmail = new EmailBuilder("motomc1@gmail.com", "dominika@wp.pl").setCC("setcc123@wp.pl").setHTML("hello").bulidEmail()

console.log(kamilEmail)