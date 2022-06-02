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
        Validator.isEmptyString(groupName)
        Validator.isStrings(groupName)
        this.allGroupContacts = []
        this.groupName = groupName
        this.groupID = uuidv4()
    }

    addContact = (contact) => {
        //instanceOf walidacja
        Validator.isObject(contact)
        this.allGroupContacts.push(contact)
    }

    removeContact = (contactName) => {
        Validator.isEmptyString(contactName)
        Validator.isStrings(contactName)
        //usówa tylko po imieniu
        // szukasz zawsze po id
        this.allGroupContacts = this.allGroupContacts.filter(el => el.name !== contactName)
    }


    checkIfContactExists = (contactDetails) => {
        Validator.isEmptyString(contactDetails)
        Validator.isStrings(contactDetails)
        return this.allGroupContacts.find(el => {
            for (const value in el) {
                if (typeof el[value] !== "function" && el[value] === contactDetails) {
                    return true
                }
            }
        })

    }

    showAllGroupContacts = () => {
        // console.log(this.allGroupContacts, this.groupName)
        return this.allGroupContacts
    }

    changeGroupName = (newName) => {
        Validator.isEmptyString(newName)
        Validator.isStrings(newName)
        this.groupName = newName
    }
}