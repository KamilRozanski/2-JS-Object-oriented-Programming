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
const contactTwo = new Contact("Patryk", "Rózański", "patryk@mail.com")
const contactThree = new Contact("Dominika", "Rozanska", "dominika@mail.com")
const contactFour = new Contact("Weronika", "Rozanska", "weronika@mail.com")

const males = new Group("males")
const females = new Group("females")
const animals = new Group("females")

const addressBook = new AddressBook()
addressBook.addContact(contactOne)
addressBook.addContact(contactTwo)
addressBook.addContact(contactFour)

addressBook.addGroup(males)
addressBook.addGroup(females)
// console.log(addressBook.searchContact("Rozanski"))
// console.log(contactOne.searchPhrase("am"))
// console.log(contactOne)