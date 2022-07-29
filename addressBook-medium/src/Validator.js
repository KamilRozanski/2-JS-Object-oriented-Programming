import {
    Contact
} from "./Contact.js"

export class Validator {
    static isString(value) {
        if (typeof value !== "string") {
            //poprawic komunikaty errorow
            throw new Error("It should be a string value")
        }
    }
    static isArray(array) {
        if (!Array.isArray(array)) {
            throw new Error("Input should be an Array")
        }
    }

    static isInstanceOfClass(value, instance) {
        if (!value instanceof instance) {
            throw new Error("Incorrect class instance")
        }
    }

    static isStrinHasRequiredCharacters(string) {
        const regex = /^[a-z](.{1,})/gi
        if (!regex.test(string)) {
            throw Error("First name and last name must have, at least two letters. No numbers or special characters")
        }
    }

    static isContactExists(contact, array) {
        const result = array.some(el => el.id === contact.id)
        if (result) {
            throw new Error("Contact already exists")
        }
    }

    static isChangedConatctExists(contact, array) {
        const result = array.some(el => el.id === contact.id)
        if (!result) {
            throw new Error("Contact not exists")
        }
    }


    static isGroupExists(group, array) {
        const result = array.some(el => el.id === group.id)
        if (result) {
            throw new Error("Group already exists")
        }
    }

    static isChangedGroupExists(group, array) {
        const result = array.some(el => el.id === group.id)
        if (!result) {
            throw new Error("Group not exists")
        }
    }

    static isRemovedValueExists(contact, array) {
        const result = array.some(el => el.id === contact.id)
        if (!result) {
            throw new Error("Value not exists")
        }
    }

    static checkEmail(email) {
        const regex = /^[a-zA-Z0-9](.{4,32})+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9].{1,3})*$/g
        if (!regex.test(email)) {
            throw new Error(`Email address has a wrong format! Correct format is 5 to 32 characters`);
        }
    }
}