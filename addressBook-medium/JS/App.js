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
males.addContact(contactOne)
males.addContact(contactTwo)
males.removeContact(contactOne)


const females = new Group("females")
females.addContact(contactThree)
females.addContact(contactFour)


const addressBook = new AddressBook()
// addressBook.addToList(contact)
// console.log(addressBook.showAllContacts())