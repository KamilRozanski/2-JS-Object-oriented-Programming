import {
    EmailBuilder
} from "./EmailBulider.js"


const kamilEmail = new EmailBuilder("motomc1@gmail.com", "dominika@wp.pl").setCC("setcc123@wp.pl").setTitle("title").setHTML("hello000").bulidEmail()

console.log(kamilEmail)