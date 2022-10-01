import {
    v4 as uuidv4
} from 'uuid';
import {
    Validator
} from "./Validator.js";



// Ma miec: Tytuł, Autora, uuid, losowe zdjęcie oraz krótki opis
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
        this.borrowedBookDate = ""
        this.returnBookDate = ""
        this.id = uuidv4()
    }

    setBorrowedDate = (date) => {
        this.borrowedBookDate = date
    }
    setReturnedDate = (date) => {
        this.returnBookDate = date
    }

    changeQuantity = (newQuantity) => {
        Validator.throwErrorIfValueIsNotAPositiveNumber(newQuantity)

        this.quantity = newQuantity
    }
}