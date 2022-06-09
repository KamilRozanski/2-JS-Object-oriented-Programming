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
        this.allGroup = []
    }

    addContactToList = (contact) => {
        Validator.isInstanceOfClass(contact, Contact)
        this.allContacts.push(contact)
    }

    removeContactFromList = (contact) => {
        Validator.isInstanceOfClass(contact, Contact)
        this.allContacts = this.allContacts.filter(el => el.id !== contact.id)
        //remove by ID?
    }
    changeFirstName = (contact, firstName) => {
        Validator.isInstanceOfClass(contact, Contact)
        Validator.isString(firstName)
        Validator.isEmptyString(firstName)
        contact.changeFirstName(firstName)
    }
    changeLastName = (contact, lastName) => {
        Validator.isInstanceOfClass(contact, Contact)
        Validator.isString(lastName)
        Validator.isEmptyString(lastName)
        contact.changeLastName(lastName)
    }

    changeEmail = (contact, email) => {
        Validator.isInstanceOfClass(contact, Contact)
        Validator.isString(email)
        Validator.isEmptyString(email)
        Validator.checkEmail(email)
        contact.changeEmail(email)
    }

    searchContact = (contactDetails) => {
        Validator.isEmptyString(contactDetails)
        Validator.isString(contactDetails)
        Validator.isEmptyString(contactDetails)
        const foundContacts = this.allContacts.filter(obj => {
            for (const el in obj) {
                if (typeof obj[el] !== "function" && obj[el] === contactDetails) {
                    return obj[el]
                }
            }
        })
        return foundContacts.length === 0 ? new Error("Contact does not exist") : foundContacts
    }

    showAllContacts = () => {
        //Why return dosen't show the this.allContacts Arr in console
        return this.allContacts
    }

    addGroup = (group) => {
        Validator.isInstanceOfClass(group, Group)
        this.allGroup.push(group)
    }
    removeGroup = (groupID) => {
        Validator.isString(groupID)
        Validator.isEmptyString(groupID)
        return this.allGroup = this.allGroup.filter(el => {
            if (el.groupID !== groupID) {
                throw new Error(`The group ID not exist`)
            }
        })
    }

    changeGroupName = (newName, group) => {
        Validator.isInstanceOfClass(group, Group)
        Validator.isString(newName)
        Validator.isEmptyString(newName)
        group.changeGroupName = newName
    }

    showAllGroups = () => {
        //Why return dosent show the this.allContacts Arr in console
        return this.allGroup
    }
}