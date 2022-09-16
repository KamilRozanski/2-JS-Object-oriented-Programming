export class Validator {
    static isString = (value) => {
        if (typeof value !== "string") {
            throw new Error("Input should be a string value")
        }
    }

    static isNumber = (value) => {
        if ((typeof value !== "number") || (isNaN(value))) {
            throw new Error("Input should be a number value")
        }
    }

    static isInstanceOfClass = (value, instance) => {
        if (!(value instanceof instance)) {
            throw new Error("Incorrect class instance")
        }
    }

    static isInstanceOfClassMultipleArguments = (value, instance) => {
        value.forEach(el => {
            if (!(el instanceof instance)) {
                throw new Error("Incorrect class instance")
            }
        });
    }


    static throwErrorIfUserAlreadyExists = (newUser, usersArray) => {
        const result = usersArray.some(existUser => newUser.id === existUser.id)
        if (result) {
            throw new Error("User already not exists")
        }
    }

    static throwErrorIfUserNotExists = (user, usersArray) => {
        const result = usersArray.some(existUser => user.id === existUser.id)
        if (!result) {
            throw new Error("User does not exists")
        }
    }

    static throwErrorIfBookNotExists = (book, booksArray) => {
        const result = booksArray.some(borrowedBook => borrowedBook.id === book.id)
        if (!result) {
            throw new Error("The book not exists")
        }
    }

    static throwErrorIfBookNotExistsMultipleArguments = (books, allBorrowedBooksArray) => {
        const allBorrowedBooksId = []

        allBorrowedBooksArray.forEach(book => {
            allBorrowedBooksId.push(book.id)
        })

        let isBookExists = books.every(removedBook => allBorrowedBooksId.includes(removedBook.id));
        console.log(isBookExists)
    }

    static throwErrorIfBookAlreadyExists = (book, array) => {
        const result = array.some(bookInArray => {
            return bookInArray.id === book.id
        })

        if (result) {
            throw new Error("The book already exists")
        }
    }

    static throwErrorIfBookAlreadyExists = (books) => {
        let allProvidedBooksId = []
        books.some(book => {
            let isBookAlreadyHasBeenAdded = allProvidedBooksId.includes(book.id)
            if (isBookAlreadyHasBeenAdded) {
                throw new Error("The book already exists on your list")
            }
            allProvidedBooksId.push(book.id)
        });
    }



    static throwErrorIfBookingNotExists = (user, bookingsArray) => {
        const result = bookingsArray.some(bookingInArray => bookingInArray.user.id === user.id)
        if (!result) {
            throw new Error("The booking not exists")
        }
    }
    static throwErrorIfBookingAlreadyExists = (user, book, bookingsArray) => {
        const result = bookingsArray.some(bookingInArray => {
            if (bookingInArray.user.id === user.id) {
                console.log(bookingInArray.getBorrowedBooks())
            }
        })
        if (result) {
            throw new Error("The booking already exists")
        }
    }

    static throwErrorIfProvidedQuantityIsSmallerThanZero = (quantity) => {
        if (quantity < 0) {
            throw new Error(`Quantity must be a positive number`)
        }
    }
}











// static throwErrorIfBooksHasEnd = (quantity) => {
//     if (quantity < 0) {
//         throw new Error(`Quantity must be a positive number`)
//     }
// }