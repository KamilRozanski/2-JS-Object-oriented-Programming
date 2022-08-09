export class Validator {
    static isString(value) {
        if (typeof value !== "string") {
            throw new Error("Input should be a string value")
        }
    }
}