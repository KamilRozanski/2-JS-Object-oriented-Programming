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
        this.allContacts.push(contact)
    }

    addGroup = (group) => {
        Validator.isInstanceOfClass(group, Group)
        this.allGroups.push(group)
    }

    removeContactFromList = (contact) => {
        Validator.isInstanceOfClass(contact, Contact)
        if (Utilties.isContactExists(contact, this.allContacts)) {
            this.allContacts = this.allContacts.filter(el => el.id !== contact.id)
        } else {
            throw new Error("Contact not exists")
        }
    }
    removeGroup = (group) => {
        //wyciągnąć ID
        Validator.isString(group)
        return this.allGroups = this.allGroups.filter(el => {
            if (el.group !== group) {
                throw new Error(`The group ID not exist`)
            }
        })
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
        //Why return dosen't show the this.allContacts Arr in console
        return this.allContacts
    }
    showAllGroups = () => {
        //Why return dosent show the this.allContacts Arr in console
        return this.allGroups
    }
}