import {
    Validator
} from "./Validator.js"
import {
    v4 as uuidv4
} from 'uuid';

export class Group {
    // Ma mieć: listę kontaktów oraz nazwę grupy oraz uuid
    // Ma umożliwiać: zmianę nazwy grupy, można dodać lub usunac kontakt z grupy, można sprawdzić czy kontakt istnieje w grupie
    constructor(groupName) {
        Validator.isString(groupName)
        Validator.isEmptyString(groupName)
        this.allGroupContacts = []
        this.groupName = groupName
        this.groupID = uuidv4()
    }

    addContact = (contact) => {
        //instanceOf walidacja
        Validator.isObject(contact)
        this.allGroupContacts.push(contact)
    }

    removeContact = (contact) => {
        this.allGroupContacts = this.allGroupContacts.filter(el => el.id !== contact.id)
    }


    checkIfContactExists = (contact) => {
        console.log(this.allGroupContacts.find(el => el.id === contact.id ? contact : false))
        return this.allGroupContacts.find(el => el.id === contact.id ? contact : false)
    }

    showAllGroupContacts = () => {
        return this.allGroupContacts
    }

    changeGroupName = (newName) => {
        Validator.isString(newName)
        Validator.isEmptyString(newName)
        this.groupName = newName
    }
}