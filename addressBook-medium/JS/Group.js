import {
    Validator
} from "./Validator.js";
import {
    v4 as uuidv4
} from 'uuid';
import {
    Contact
} from "./Contact.js";
import {
    Utilties
} from "./Utilities.js"


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

        const isDuplicates = Utilties.isContactExists(contact, this.allGroupContacts)
        if (isDuplicates) throw new Error("Contact already existis")

        this.allGroupContacts.push(contact)

        // sprwardzic czy nie ma dubla. Error wyniesc do validatora.
    }

    removeContact = (contact) => {
        Validator.isInstanceOfClass(contact, Contact)
        const isContactExists = Utilties.isContactExists(contact, this.allGroupContacts)
        if (isContactExists) {
            this.allGroupContacts = this.allGroupContacts.filter(el => el.id !== contact.id)
        } else {
            throw new Error("Contact is not exists in Group")
        }
        //sprawdzic czy kontakt intnieje
    }

    findContact = (contact) => {
        Validator.isInstanceOfClass(contact, Contact)
        return this.allGroupContacts.find(el => el.id === contact.id)
    }

    showAllGroupContacts = () => {
        return this.allGroupContacts
        //nazwa do poprawy
    }

    changeGroupName = (newName) => {
        Validator.isString(newName)
        this.groupName = newName
    }
}