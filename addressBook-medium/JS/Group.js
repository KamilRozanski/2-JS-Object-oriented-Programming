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
        this.groupID = uuidv4()
        this.allGroupContacts = []
    }

    addContact = (contact) => {
        Validator.isInstanceOfClass(contact, Contact)
        this.allGroupContacts.every(el => {
          return contact.id !== el.id ? true : new Error(`${value.id} already exists`)
         })
        this.allGroupContacts.push(contact)
        // sprwardzic czy nie ma dubla.
    }


    removeContact = (contact) => {
        Validator.isInstanceOfClass(contact, Contact)

        const isContactExistsInGroup = this.allGroupContacts.some(el => el.id === contact.id)
        return  isContactExistsInGroup ? this.allGroupContacts = this.allGroupContacts.filter(el => el.id !== contact.id) : new Error ("Contact is not exists in Group")
        //sprawdzic czy kontakt intnieje
    }


    findContact = (contact) => {
        Validator.isInstanceOfClass(contact, Contact)
        // This method dosent return any value ???!!!
        return this.allGroupContacts.find(el => el.id === contact.id)
    }

    showAllGroupContacts = () => {
        //Why return dosent show the this.allGroupContacts Arr in console
        return this.allGroupContacts
    }

    changeGroupName = (newName) => {
        Validator.isString(newName)
        this.groupName = newName
    }
}