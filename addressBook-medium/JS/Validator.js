import {
    Contact
} from "./Contact.js"

export class Validator {
    static isString(value) {
        if (typeof value !== "string") {
            throw new Error("It is not a string value")
        }
    }
    static isArray(array) {
        if (!Array.isArray(array)) {
            throw new Error("Input is not Array")
        }
    }

    static isInstanceOfClass(value, instance) {
        if (!value instanceof instance) {
            throw new Error("Incorrect class instance")
        }
    }

    static canRemoveValue = (boolien) => {
        if (boolien) {
            throw new Error("Value does't exists ")
        }
    }
    static canAddValue = (boolien) => {
        if (boolien) {
            throw new Error("Value already exists")
        }
    }

    static isGroupExists = (group, array) => {
        const isGroupExists = array.some(el => group.id === el.id)
        if (isGroupExists) {
            throw new Error("Group already existis")
        }
    }
    static checkEmail(email) {
        const regex = /^[a-zA-Z0-9](.{4,32})+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9].{1,3})*$/g
        if (!regex.test(email)) {
            throw new Error(`Email address has a wrong format! Correct format is 5 to 32 characters`);
        }
    }
}