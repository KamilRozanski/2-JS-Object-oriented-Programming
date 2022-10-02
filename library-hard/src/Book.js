import {
    v4 as uuidv4
} from 'uuid';
import {
    Validator
} from "./Validator.js";


export class Book {
    constructor(title, author, photoOfTheBook, description, quantity = 1) {
        Validator.throwErrorIfValueIsNotAString(title)
        Validator.throwErrorIfValueIsNotAString(author)
        Validator.throwErrorIfValueIsNotAString(photoOfTheBook)
        Validator.throwErrorIfValueIsNotAString(description)
        Validator.throwErrorIfValueIsNotAPositiveNumber(quantity)

        this.title = title
        this.author = author
        this.photoOfTheBook = photoOfTheBook
        this.description = description
        this.quantity = quantity
        this.dateOfBorrow = ""
        this.dateOfReturn = ""
        this.id = uuidv4()
    }

    setDateOfBorrow = (date) => {
        this.dateOfBorrow = date
    }
    setDateOfReturn = (date) => {
        this.dateOfReturn = date
    }

    changeQuantity = (newQuantity) => {
        Validator.throwErrorIfValueIsNotAPositiveNumber(newQuantity)

        this.quantity = newQuantity
    }
}