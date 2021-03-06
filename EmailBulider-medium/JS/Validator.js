export class Validator {
    static isString = (value) => {
        if (typeof value !== "string") {
            throw new Error("It is not a string value")
        }
    }

    static checkEmail = (email) => {
        const regex = /^[a-zA-Z0-9](.{4,32})+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9].{1,3})*$/g
        if (!regex.test(email)) {
            throw new Error(`Email address has a wrong format! Correct format is 5 to 32 characters`);
        }
    }

    static requiredValue = (value) => {
        if (typeof value === "undefined") {
            throw new Error(`Values "from" and "to" must be provided`)
        }
    }
}