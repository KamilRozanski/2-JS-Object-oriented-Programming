import {
    v4 as uuidv4
} from 'uuid';
import {
    Validator
} from "./Validator.js";



// Ma miec: Tytuł, Autora, uuid, losowe zdjęcie oraz krótki opis
export class Book {
    constructor(title, author, photoOfTheBook, description, quantity = 1) {
        Validator.isString(title)
        Validator.isString(author)
        Validator.isString(photoOfTheBook)
        Validator.isString(description)
        this.title = title
        this.author = author
        this.photoOfTheBook = photoOfTheBook
        this.description = description
        this.quantity = quantity
        this.id = uuidv4()
    }

    changeQuantity = (newQuantity => {
        Validator.isNumber(newQuantity)
        Validator.throwErrorIfQuantityIsSmallerThanZero(newQuantity)

        this.quantity = newQuantity
    })
}