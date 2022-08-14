export class Validator {
    static isString = (value) => {
        if (typeof value !== "string") {
            throw new Error("Input should be a string value")
        }
    }

    static isNumber = (value) => {
        if ((typeof value !== "number") || (isNaN(value))) {
            throw new Error("Input should be a number value")
        }
    }

    static isInstanceOfClass = (value, instance) => {
        if (!(value instanceof instance)) {
            throw new Error("Incorrect class instance")
        }
    }

    static throwErrorIfBookNotExists = (book, array) => {
        if (!array.includes(book)) {
            throw new Error("Book not exists")
        }
    }
}