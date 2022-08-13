import {
    Book
} from "./Book.js";


export class BooksWarehouse {
    constructor(...book) {
        this.allBooks = book
    }
}