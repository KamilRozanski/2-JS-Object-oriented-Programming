import {
    v4 as uuidv4
} from 'uuid';
import {
    Validator
} from "./Validator.js";


export class User {
    constructor(firstName, secondName) {
        Validator.throwErrorIfValueIsNotAString(firstName)
        Validator.throwErrorIfValueIsNotAString(secondName)
        this.firstName = firstName
        this.secondName = secondName
        this.id = uuidv4()
    }
}