export class Validator {
    static isString = (value) => {
        if (typeof value !== "string") {
            throw new Error("It is not a string value")
        }
    }
    static isNumber = (value) => {
        if (typeof value !== "number" || isNaN(value)) {
            throw new Error("It is not a number value")
        }
    }
    static isInstanceOf = (item, instance) => {
        if (item instanceof instance === false) {
            throw new Error("Incoret class insatnce")
        }
    }
}