// import {
//     AppMenager
// } from "./AppMenager.js"
import {
    Admin
} from "./Admin.js"
import {
    User
} from "./User.js"


const kamil = new Admin("Kamil", "Rozanski", "27/02/1989", "Anglia15!", "male", "motomc1M!@gmail.com")
const dominika = new Admin("dominika", "Rozanska", "11/09/1999", "Ang4!7bgg", "female", "dominika!@gmail.com")
const patryk = new User("Patryk", "Rozanski", "27/02/1989", "Anglia15!", "male", "motomc1M!@gmail.com")
const krystian = new User("Krystian", "Rozanski", "27/02/1989", "Anglia15!", "male", "jajoJAJO#@gmail.com")

kamil.setEmail(patryk, "Anglia15@wp.pl")
console.log(patryk)