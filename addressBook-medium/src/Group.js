import {
    Validator
} from "./Validator.js";
import {
    v4 as uuidv4
} from 'uuid';
import {
    Contact
} from "./Contact.js";



export class Group {
    // Ma mieć: listę kontaktów oraz nazwę grupy oraz uuid
    // Ma umożliwiać: zmianę nazwy grupy, można dodać lub usunac kontakt z grupy, można sprawdzić czy kontakt istnieje w grupie
    constructor(groupName) {
        Validator.isString(groupName)
        this.groupName = groupName
        this.id = uuidv4()
        this.allGroupContacts = []
    }

    addContact = (contact) => {
        Validator.isInstanceOfClass(contact, Contact)
        Validator.isContactExists(contact, this.allGroupContacts)

        this.allGroupContacts.push(contact)
    }

    removeContact = (contact) => {
        Validator.isInstanceOfClass(contact, Contact)
        Validator.isRemovedValueExists(contact, this.allGroupContacts)

        this.allGroupContacts = this.allGroupContacts.filter(el => el.id !== contact.id)
    }

    findContact = (contact) => {
        Validator.isInstanceOfClass(contact, Contact)
        return this.allGroupContacts.find(el => el.id === contact.id)
    }

    getAllGroupContacts = () => {
        return this.allGroupContacts
    }

    changeGroupName = (newName) => {
        Validator.isString(newName)
        this.groupName = newName
    }
}