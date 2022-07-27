import {
    Validator
} from "./Validator.js"
import {
    Contact
} from "./Contact.js";
import {
    Group
} from "./Group.js";
import {
    Utilties
} from "./Utilities.js";



export class AddressBook {
    // Ma mieć: listę wszystkich kontaktów, listę grup kontaktów 
    // Ma umożliwiać: szukanie kontaktu po frazie, dodawanie/usuwanie/modyfikacje nowych kontaktów, dodawanie/usuwanie/modyfikacje nowych grup
    constructor() {
        this.allContacts = []
        this.allGroups = []
    }

    addContact = (contact) => {
        Validator.isInstanceOfClass(contact, Contact)
        Validator.isContactExists(contact, this.allContacts)

        this.allContacts.push(contact)
    }

    addGroup = (group) => {
        Validator.isInstanceOfClass(group, Group)
        Validator.isGroupExists(group, this.allGroups)

        this.allGroups.push(group)
    }

    removeContact = (contact) => {
        Validator.isInstanceOfClass(contact, Contact)
        Validator.isRemovedValueExists(contact, this.allContacts)

        this.allContacts = this.allContacts.filter(el => el.id !== contact.id)
    }

    removeGroup = (group) => {
        Validator.isInstanceOfClass(group, Group)
        Validator.isRemovedValueExists(group, this.allGroups)

        this.allGroups = this.allGroups.filter(el => el.id !== group.id)
    }

    changeFirstName = (contact, firstName) => {
        Validator.isChangedConatctExists(contact, this.allContacts)
        Validator.isInstanceOfClass(contact, Contact)
        Validator.isString(firstName)

        contact.changeFirstName(firstName)
    }

    changeLastName = (contact, lastName) => {
        Validator.isChangedConatctExists(contact, this.allContacts)
        Validator.isInstanceOfClass(contact, Contact)
        Validator.isString(lastName)

        contact.changeLastName(lastName)
    }

    changeGroupName = (group, newName) => {
        Validator.isChangedGroupExists(group, this.allGroups)
        Validator.isInstanceOfClass(group, Group)
        Validator.isString(newName)

        group.changeGroupName = newName
    }

    changeEmail = (contact, email) => {
        Validator.isChangedConatctExists(contact, this.allContacts)
        Validator.isInstanceOfClass(contact, Contact)
        Validator.checkEmail(email)

        contact.changeEmail(email)
    }

    searchContact = (contactDetails) => {
        Validator.isString(contactDetails)
        return this.allContacts.filter(contact => {
            return contact.searchPhrase(contactDetails)
        })
    }

    showAllContacts = () => {
        return this.allContacts
    }
    showAllGroups = () => {
        return this.allGroups
    }
}