`use strict`
class User {
    constructor(name, secondName, dateOfBirth, password, gender, emailAddress, accessLevel) {
        this.name = name
        this.secondName = secondName
        this.dateOfBirth = dateOfBirth
        this.password = password
        this.gender = gender
        this.emailAddress = emailAddress
        this.accessLevel = accessLevel
        // ["user", "admin"]
    }

    changePassword = (newPassword) => {
        if (this.accessLevel === "admin") {
            this.password = newPassword
        } else {
            throw new Error("You can not change a password")
        }

    }
    changeEmail = (newEmail) => {
        if (this.accessLevel === "admin") {
            this.emailAddress = newEmail
        } else {
            throw new Error("You can not change an email Address")
        }
    }

    levelAccess = (level) => {
        this.accessLevel = level
    }

}

class App extends User {
    constructor(name, secondName, dateOfBirth, password, gender, emailAddress, accessLevel) {
        super(name, secondName, dateOfBirth, password, gender, emailAddress, accessLevel)
    }
    createUser = (name, secondName, dateOfBirth, password, gender, emailAddress, accessLevel) => {
        const user = {
            name,
            secondName,
            dateOfBirth,
            password,
            gender,
            emailAddress,
            accessLevel
        }
        return user
    }
    // listOfUsers
    // createUser(...)
    // createAdmin(...)
    // wszystkie metody w których admin ingeruje we właściwości innych użytkowników
}


const newUser = new User("Kamil", "Rozanski", "27.02.1986", "Anglia15", "male", "motomc1@gmail.com", "admin")
newUser.changePassword("Anglia2022")
newUser.changeEmail("www@www.pl")
newUser.levelAccess("user")
console.log(newUser)

// const app = new App
// console.log(app.createUser("Kamil", "Rozanski", "27.02.1986", "Anglia15", "male", "motomc1@gmail.com", "admin"))