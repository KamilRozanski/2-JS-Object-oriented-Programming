import {
    Validator
} from "./Validator.js"

import {
    User
} from "./User.js"
import {
    Admin
} from "./Admin.js"
// - [ ] Klasa App powinna zarządzać relacjami pomiędzy użytkownikami.
// - [ ] Zawiera listę użytkowników, pozwala tworzyć nowych użytkowników o różnych poziomach dostępu.
class AppMenager {
    constructor() {
        this.allUsers = []
        this.allAdmins = []
    }

    createUser = (user) => {
        Validator.isUser(user)
        this.allUsers.push(user)
    }
    createAdmin = (admin) => {
        Validator.isAdmin(admin)
        this.allAdmins.push(admin)
    }
    showAllUsers = () => {
        return this.allUsers
    }

}





export {
    AppMenager
}