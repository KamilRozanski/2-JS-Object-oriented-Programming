import {
    Contact
} from "./Contact.js";
import {
    Group
} from "./Group.js";
import {
    AddressBook
} from "./AddressBook.js";



const contactOne = new Contact("Kamil", "Rózański", "kamil@wp.pl")
const contactTwo = new Contact("Patryk", "Rózański", "patryk@gmail.com")
const contactThree = new Contact("Dominika", "Rozanska", "dominika@gmail.com")
const contactFour = new Contact("Weronika", "Rozanska", "weronika@gmail.com")

const males = new Group("males")
const females = new Group("females")
const animals = new Group("females")

males.addContact(contactOne)
// console.log(males.findContact(contactOne))


const addressBook = new AddressBook()
addressBook.addContact(contactOne)
addressBook.addContact(contactTwo)
addressBook.addContact(contactFour)

// addressBook.addGroup(males)
// addressBook.addGroup(females)
// console.log(addressBook.changeEmail(contactOne, "235MMMdddada@wp.pl"))
console.log(addressBook.searchContact("ańskidda"))
// console.log(contactOne)