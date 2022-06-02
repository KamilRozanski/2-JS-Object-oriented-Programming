export class Validator {
    static isString(value) {
        if (typeof value !== "string") {
            throw new Error("it is not a string value")
        }
    }
    static isEmptyString(value) {
        if (typeof value.length === 0) {
            throw new Error("it is not a string value")
        }
    }
    static isObject(value) {
        //InstatnceOf zamiast Object.prototype
        if (Object.prototype.toString.call(value) !== "[object Object]")
            throw new Error("You must provide a Object value")

    }
    static checkEmail(email) {
        const regex = /^[a-zA-Z0-9](.{4,32})+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9].{1,3})*$/g
        if (!regex.test(email)) {
            throw new Error(`Email address has a wrong format! Correct format is 5 to 32 characters`);
        }
    }
}