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
const females = new Group("females")

// males.addContact(contactOne)
// males.addContact(contactTwo)
// males.removeContact(contactTwo)
// console.log(males)



const addressBook = new AddressBook()
addressBook.addContact(contactOne)
addressBook.addContact(contactTwo)
// addressBook.removeContact(contactOne)

addressBook.addGroup(males)
addressBook.addGroup(females)
addressBook.changeFirstName(contactFour, "Eryk")
// console.log(addressBook.changeFirstName(contactTwo, "koles"))
// console.log(addressBook.showAllContacts())

console.log(addressBook)