import {
    User
} from "./User.js";
import {
    Book
} from "./Book.js";
import {
    Booking
} from "./Booking.js";


const user = new User("Kamil", "Rózański")
const bookOne = new Book("title", "author", "photoOfTheBook", "description")
const bookTwo = new Book("title Two", "author Two", "photoOfTheBook Two", "description Two")
const borrowing = new Booking(user)



// console.log(user)
borrowing.borrowBook(bookOne)
// borrowing.borrowBook(bookTwo)
borrowing.returnBook(bookOne)

console.log(borrowing)