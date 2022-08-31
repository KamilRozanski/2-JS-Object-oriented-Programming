import {
    User
} from "./User.js";
import {
    Book
} from "./Book.js";

import {
    BooksStorage
} from "./BooksStorage.js";

import {
    Booking
} from "./Booking.js";

import {
    Library
} from "./Library.js";


const kamil = new User("Kamil", "Rózański")
const dominika = new User("Dominika", "Rózańska")
const bookOne = new Book("title One", "author One", "photoOfTheBook One", "description One")
const bookTwo = new Book("title Two", "author Two", "photoOfTheBook Two", "description Two")
const bookThree = new Book("title Three", "author Three", "photoOfTheBook Three", "description Three")


const bookingKamil = new Booking(kamil)
// const bookingDominika = new Booking(dominika)





const library = new Library()
library.addBook(bookOne)
library.addBook(bookTwo)
library.addBook(bookThree)

library.addUser(kamil)
library.addUser(dominika)


library.borrowBook(kamil, bookOne)

bookingKamil.addBookToBookingList(bookOne)
// bookingKamil.removeBookFromBookingList(bookOne)
console.log(bookingKamil)