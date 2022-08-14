import {
    Book
} from "./Book.js";


export class BooksStorage {
    constructor(...book) {
        this.allBooks = book
    }
}