import {
    v4 as uuidv4
} from 'uuid';
import {
    Validator
} from "./Validator.js";



// Ma miec: Tytuł, Autora, uuid, losowe zdjęcie oraz krótki opis
export class Book {
    constructor(title, author, photoOfTheBook, description) {
        Validator.isString(title)
        Validator.isString(author)
        Validator.isString(description)
        this.title = title
        this.author = author
        this.photoOfTheBook = photoOfTheBook
        this.description = description
        this.id = uuidv4()
    }
}