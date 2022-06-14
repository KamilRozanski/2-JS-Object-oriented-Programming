export class Validator {
    static isBoolean(value) {
        if (typeof value !== "boolean") {
            throw new Error("it is not a Boolean value")
        }
    }
    static isFunction(value) {
        if (typeof value !== "function") {
            throw new Error("it is not a function")
        }
    }
}



