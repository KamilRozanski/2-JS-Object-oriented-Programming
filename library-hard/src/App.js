import {
    User
} from "./User.js";
import {
    Book
} from "./Book.js";

import {
    Booking
} from "./Booking.js";

import {
    Library
} from "./Library.js";


const kamil = new User("Kamil", "Rózański")
const dominika = new User("Dominika", "Rózańska")
const krystian = new User("Krystian", "Rózański")

const bookOne = new Book("title One", "author One", "photoOfTheBook One", "description One")
const bookTwo = new Book("title Two", "author Two", "photoOfTheBook Two", "description Two")
const bookThree = new Book("title Three", "author Three", "photoOfTheBook Three", "description Three")


// const bookingKamil = new Booking(kamil)
// const bookingDominika = new Booking(dominika)

// bookingKamil.addBookToBookingList(bookOne)
// bookingKamil.addBookToBookingList(bookTwo)
// console.log(bookingKamil)
// bookingKamil.removeBookFromBookingList(bookOne)


const library = new Library()

library.addUser(kamil)
library.addUser(dominika)

library.addBook(bookOne)
// library.addBook(bookOne)
library.addBook(bookTwo)
library.addBook(bookThree)


library.createBooking(kamil, bookOne)
library.createBooking(kamil, bookTwo)
library.createBooking(dominika, bookThree)

// library.removeBooking(dominika)
// library.removeBookFromBooking(kamil, bookOne)
library.returnBook(kamil, bookTwo)
library.removeUser(kamil)




// console.log(library.getAllBookings())
console.log(library.getAllUsers())