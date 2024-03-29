export class Validator {
    static isArray = (array) => {
        if (!Array.isArray(array)) {
            throw new Error("Value should be an array")
        }
    }

    static isUser = (user) => {
        if (user.accessLevel !== "user") {
            throw new Error(`Access level should be a "User"`)
        }
    }

    static isAdmin = (admin) => {
        if (admin.accessLevel !== "admin") {
            throw new Error(`Access level is should be an "Admin"`)
        }
    }

    static isString = (value) => {
        if (typeof value !== "string") {
            throw new Error("Value should be a string")
        }
    }

    static checkEmailFormat(email) {
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-](.{7,32})+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9].{1,3})*$/g
        if (!regex.test(email)) {
            throw new Error(`Email address has a wrong format! Correct format is 8-32 characters, at least one capital letter, one number and one special character `);
        }
    }

    static checkPasswordFormat(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#$%^&*()<>?])+.{9,32}$/g
        if (!regex.test(password)) {
            throw new Error(`Invalid password. Password must have from 8 to 32 characters, includes at least one capital letter, one number and one special character  `);
        }
    }

    static checkGender(gender) {
        if (!["male", "female"].includes(gender.toString().toLowerCase())) {
            throw new Error("Gender, male or female only")
        }
    }

    static checkDate(value) {
        const regex = /^\d{2}\/\d{2}\/\d{4}$/g
        const correctDate = regex.test(value)
        if (!correctDate) {
            throw new Error("Incorrect date format. Correct one is MM/DD/YYYY")
        }
    }
}