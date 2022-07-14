import {
    Email
} from "./Email.js"

import {
    EmailBuilder
} from "./EmailBulider.js"


const bulidmail = new EmailBuilder("motomc1@gmail.com", "dominika@wp.pl")
// bulidmail.changeFrom("eljdkoElo@elo.pl")
bulidmail.setCC("setcc123@wp.pl").setHTML("hello").setTitle("title").bulidEmail()
console.log(bulidmail)