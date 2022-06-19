import {
    User
} from "./User.js"
import {
    Admin
} from "./Admin.js"

export class Validator {
    static firstNameProvided = (firstName) => {
        if (typeof firstName.length === 0) {
            throw new Error("Provida a first name")
        }
    }
    static secondNameProvided = (firstName) => {
        if (typeof firstName.length === 0) {
            throw new Error("Provida a second name")
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

    static isUser = (user) => {
        if (user.accessLevel !== "user") {
            throw new Error(`Access level is not a "User"`)
        }
    }

    static isAdmin = (admin) => {
        if (admin.accessLevel !== "admin") {
            throw new Error(`Access level is not an "Admin"`)
        }
    }

    static isString(value) {
        if (typeof value !== "string") {
            throw new Error("it is not a string value")
        }
    }

    static isInstanceOfUser = (user) => {
        if (!user instanceof User) {
            throw new Error(`${user} it is not instance of Admin Object`)
        }
    }
    static isUserOrAdmin(element) {
        // tablica z poziomami dostępu
        if (typeof element === "object" && !["admin", "user"].includes(element.accessLevel)) {
            throw new Error("Access level can be user or admin only")
        }
        if (typeof element === "string" && !["admin", "user"].includes(element)) {
            throw new Error("The new access level can be user or admin only")
        }
    }

    static isInstanceOfAdmin = (admin) => {
        if (!admin instanceof Admin) {
            throw new Error(`${admin} it is not instance of Admin Object`)
        }
    }
}