import {
    Contact
} from "./Contact.js";
import {
    Group
} from "./Group.js";
import {
    AddressBook
} from "./AddressBook.js";



const contactOne = new Contact("Kamil", "Róański", "kamil@wp.pl")
const contactTwo = new Contact("Patryk", "Róański", "patryk@mail.com")
const contactThree = new Contact("Dominika", "Rozanska", "dominika@mail.com")
const contactFour = new Contact("Weronika", "Rozanska", "weronika@mail.com")

const males = new Group("males")
// males.addContact(contactOne)
// males.addContact(contactTwo)
// males.removeContact(contactOne)
// console.log(males.getAllGroupContacts())
const females = new Group("females")


const addressBook = new AddressBook()
addressBook.addContact(contactOne)
addressBook.addContact(contactTwo)
addressBook.addGroup(males)
addressBook.addGroup(females)
console.log(addressBook.changeFirstName(contactFour, "koles"))
console.log(addressBook.showAllContacts())
// console.log(addressBook.showAllGroups())