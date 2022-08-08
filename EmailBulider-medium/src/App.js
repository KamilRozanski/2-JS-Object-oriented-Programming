import {
    EmailBuilder
} from "./EmailBulider.js"
import {
    EmailBuilderTwo
} from "./EmailBulider.js"
import {
    Director
} from "./Director.js"

const kamilEmail = new EmailBuilder("motomc1@gmail.com", "dominika@wp.pl").setCC("setcc123@wp.pl").setTitle("title").setHTML("hello000").bulidEmail()

const director = new Director(new EmailBuilder("motomc1@gmail.com", "dominika@wp.pl"))
console.log(director.basicEmail())






















// const kamilEmailTwo = new EmailBuilderTwo("motomc1@gmail.com", "dominika@wp.pl", {
//     cc: "dupa"
// })

// console.log(kamilEmailTwo)