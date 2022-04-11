`use strict`

// class Utils <= klasa narzędziowa
class Validator {
    static isStrings(...value) {
        value.forEach(el => {
            if (typeof el !== "string") {
                throw new Error("it is not a string value")
            }
            if (el.length === 0) {
                throw new Error("Provide a string value")
            }
        });
    }
    static checkEmail(email) {
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-](.{7,32})+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9].{1,3})*$/g
        if (!regex.test(email)) {
            throw new Error(`Email address has a wrong format! Correct format is 8-32 characters, at least one capital letter, one number and one special character `);
        }
    }

    static checkPassword(password) {
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

    // - data (nieważne jaka wejdzie) do konstruktora musi wejść w formacie MM/DD/YYYY

    static checkDate(value) {
        const regex = /^\d{2}\/\d{2}\/\d{4}$/g
        const correctDate = regex.test(value)
        if (!correctDate) {
            throw new Error("Incorrect date format. Correct one is MM/DD/YYYY")
        }
    }

    static checkInputAccessLevel = (accLevel) => {
        if (!["admin", "user"].includes(accLevel.toString().toLowerCase())) {
            throw new Error(`Access level is not an "admin" or "user"`)
        }
    }

}
class User {
    constructor(name, secondName, dateOfBirth, password, gender, emailAddress) {
        Validator.isStrings(name, secondName)
        // Validator.checkInputAccessLevel(accessLevel)
        Validator.checkPassword(password)
        Validator.checkGender(gender)
        Validator.checkEmail(emailAddress)
        Validator.checkDate(dateOfBirth)

        this.name = name
        this.secondName = secondName
        this.dateOfBirth = dateOfBirth
        this.password = password
        this.gender = gender
        this.emailAddress = emailAddress
        this.accessLevel = "user"
    }
    changeName = (value) => {
        this.name = value
    }
    changeSecondName = (value) => {
        this.secondName = value
    }
    changeDateOfBirth = (value) => {
        this.dateOfBirth = value
    }
    changeGender = (value) => {
        this.gender = value
    }
}



class Admin {
    constructor(name, secondName, dateOfBirth, password, gender, emailAddress) {
        Validator.isStrings(name, secondName)
        // Validator.checkInputAccessLevel(accessLevel)
        Validator.checkPassword(password)
        Validator.checkGender(gender)
        Validator.checkEmail(emailAddress)
        Validator.checkDate(dateOfBirth)

        this.name = name
        this.secondName = secondName
        this.dateOfBirth = dateOfBirth
        this.password = password
        this.gender = gender
        this.emailAddress = emailAddress
        this.accessLevel = "admin"
    }

    setPassword = (newPassword) => {
        Validator.isStrings(newPassword)
        Validator.checkPassword(newPassword)
        this.password = newPassword
    }
    setEmail = (newEmail) => {
        Validator.isStrings(newEmail)
        Validator.checkEmail(newEmail)
        this.emailAddress = newEmail

    }
    setAccessLevel = (level) => {
        Validator.isStrings(level)
        Validator.checkInputAccessLevel(level)
        this.accessLevel = level
    }

}

class App {
    constructor() {
        this.allUsers = []
    }
    createAdmin = (name, secondName, dateOfBirth, password, gender, emailAddress) => {
        const admin = new Admin(name, secondName, dateOfBirth, password, gender, emailAddress)
        this.allUsers.push(admin)
        return admin
    }
    createUser = (name, secondName, dateOfBirth, password, gender, emailAddress) => {
        const user = new User(name, secondName, dateOfBirth, password, gender, emailAddress)
        this.allUsers.push(user)
        return user
    }
    showAllUsers = () => {
        return this.allUsers
    }
}


// const userAdmin = new Admin("Kamil", "Rozanski", "27/02/1989", "Anglia15!", "male", "motomc1M!@gmail.com", "Admin")
// const userAdminTwo = new Admin("Kamil", "Rozanski", "27/02/1989", "Anglia15!", "male", "motomc1M!@gmail.com", "Admin")
// console.log(userAdmin.setAccessLevel("user"))

// const userUser = new User("Patryk", "Rozanski", "27/02/1989", "Anglia15!", "male", "jajoJAJO#@gmail.com", "user")

// console.log(userUser.changeName("Grazyna"))

// console.log(userAdmin)
// console.log(userUser)


const app = new App
app.createAdmin("Kamil", "Rozanski", "27/02/1989", "Anglia15!", "male", "motomc1M!@gmail.com")
app.createAdmin("Patryk", "Rozanski", "27/02/1989", "AnglidaA@a15!", "male", "motomc1M!@gmail.com")
// app.createUser("Alan", "Rozanski", "27/02/1989", "AnglidaA@a15!", "male", "motomc1M!@gmail.com")
// // app.createUser("Dominika", "Rozanski", "27/02/1989", "AnglidaA@a15!", "male", "motomc1M!@gmail.com")
// // console.log(app.allUsers[0].setPassword(app.allUsers[2], "AlanA@a15!"))
console.log(app.showAllUsers())