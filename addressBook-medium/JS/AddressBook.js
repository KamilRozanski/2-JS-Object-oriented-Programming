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

    addContactToList = (contact) => {
        Validator.isInstanceOfClass(contact, Contact)
        const isDuplicates = Utilties.isContactExists(contact, this.allContacts)
        if (isDuplicates) {
            throw new Error("Contact is already existis")
        } else {
            this.allContacts.push(contact)
        }
    }

    addGroup = (group) => {
        Validator.isInstanceOfClass(group, Group)
        const isDuplicates = Utilties.isContactExists(group, this.allGroups)
        if (isDuplicates) {
            throw new Error("Group is already existis")
        } else {
            this.allGroups.push(group)
        }
    }

    removeContactFromList = (contact) => {
        Validator.isInstanceOfClass(contact, Contact)
        const isContactExists = Utilties.isContactExists(contact, this.allContacts)
        if (isContactExists) {
            this.allContacts = this.allContacts.filter(el => el.id !== contact.id)
        } else {
            throw new Error("Contact not exists")
        }
    }
    removeGroup = (group) => {
        Validator.isInstanceOfClass(group, Group)
        const isGroupExists = Utilties.isContactExists(group, this.allGroups)
        if (isGroupExists) {
            this.allGroups = this.allGroups.filter(el => el.id !== group.id)
        } else {
            throw new Error("Group not exists")
        }
    }

    changeFirstName = (contact, firstName) => {
        Validator.isInstanceOfClass(contact, Contact)
        Validator.isString(firstName)
        contact.changeFirstName(firstName)
    }

    changeLastName = (contact, lastName) => {
        Validator.isInstanceOfClass(contact, Contact)
        Validator.isString(lastName)
        contact.changeLastName(lastName)
    }

    changeGroupName = (newName, group) => {
        Validator.isInstanceOfClass(group, Group)
        Validator.isString(newName)
        group.changeGroupName = newName
    }

    changeEmail = (contact, email) => {
        Validator.isInstanceOfClass(contact, Contact)
        Validator.isString(email)
        Validator.checkEmail(email)
        contact.changeEmail(email)
    }

    searchContact = (contactDetails) => {
        Validator.isString(contactDetails)
        return this.allContacts.filter(obj => {
            for (const el in obj) {
                if (typeof obj[el] !== "function" && obj[el] === contactDetails) {
                    return obj[el]
                }
            }
        })
        // nowa klasa 
    }

    showAllContacts = () => {
        return this.allContacts
    }
    showAllGroups = () => {
        return this.allGroups
    }
}