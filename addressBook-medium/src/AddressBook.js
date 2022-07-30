import {
    Validator
} from "./Validator.js"
import {
    Contact
} from "./Contact.js";
import {
    Group
} from "./Group.js";




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
        Validator.throwErrorIfGroupExists(group, this.allGroups)

        this.allGroups.push(group)
    }

    removeContact = (contact) => {
        Validator.isInstanceOfClass(contact, Contact)
        Validator.throwErrorIfContactNotExists(contact, this.allContacts)

        this.allContacts = this.allContacts.filter(el => el.id !== contact.id)
    }

    removeGroup = (group) => {
        Validator.isInstanceOfClass(group, Group)
        Validator.isRemovedValueExists(group, this.allGroups)

        this.allGroups = this.allGroups.filter(el => el.id !== group.id)
    }

    changeFirstName = (contact, firstName) => {
        Validator.throwErrorIfChangedContatNotExists(contact, this.allContacts)
        Validator.isInstanceOfClass(contact, Contact)

        contact.changeFirstName(firstName)
    }

    changeLastName = (contact, lastName) => {
        Validator.throwErrorIfChangedContatNotExists(contact, this.allContacts)
        Validator.isInstanceOfClass(contact, Contact)

        contact.changeLastName(lastName)
    }

    changeGroupName = (group, newName) => {
        Validator.isChangedGroupExists(group, this.allGroups)
        Validator.isInstanceOfClass(group, Group)

        group.changeGroupName(newName)
    }

    changeEmail = (contact, email) => {
        Validator.throwErrorIfChangedEmailNotExists(contact, this.allContacts)
        Validator.isInstanceOfClass(contact, Contact)
        //robic walidacje na email? I tak jest ona wykonywana w contact.changeEmail
        contact.changeEmail(email)
    }

    searchContact = (contactDetails) => {
        Validator.isString(contactDetails)
        return this.allContacts.filter(contact => contact.searchPhrase(contactDetails))
    }

    showAllContacts = () => {
        return this.allContacts
    }
    showAllGroups = () => {
        return this.allGroups
    }
}