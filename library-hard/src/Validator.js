export class Validator {
    static throwErrorIfValueIsNotAString = (value) => {
        if (typeof value !== "string") {
            throw new Error("Input should be a string value")
        }
    }

    static throwErrorIfValueIsNotAPositiveNumber = (value) => {
        if (typeof value !== "number" || isNaN(value) || value < 0) {
            throw new Error("Input should be a  positive number value")
        }
    }

    static throwErrorIfInstanceOfClassIsIncorrect = (value, instance) => {
        if (!(value instanceof instance)) {
            throw new Error("Incorrect class instance")
        }
    }


    static isInstanceOfClassMultipleArguments = (value, instance) => {
        //nazwa do poprawy
        value.forEach(el => {
            if (!(el instanceof instance)) {
                throw new Error("Incorrect class instance")
            }
        });
    }

    static throwErrorIfUserAlreadyExists = (newUser, usersArray) => {
        const result = usersArray.some(existUser => newUser.id === existUser.id)
        if (result) {
            throw new Error("User already exists")
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

    static throwErrorIfReturnedBookNotExists = (book, array) => {
        const result = array.some(el => el.id === book.id)

        if (!result) {
            throw new Error("The book not exists")
        }
    }


    static throwErrorIfBookNotExistsMultipleArguments = (booksToCheck, booksArray) => {
        const result = booksToCheck.find(bookToCheck => !booksArray.some(book => (bookToCheck.id === book.id)))

        if (result) {
            const idBook = result.id
            throw new Error(`${idBook} not exists in Library`)
        }
    }

    static throwErrorIfBookAlreadyExists = (book, array) => {
        const result = array.some(bookInArray => {
            return bookInArray.id === book.id
        })

        if (result) {
            throw new Error("The book already exists")
        }
    }

    // static throwErrorIfBookAlreadyExistsMultipleArguments = (books) => {
    //     let allProvidedBooksId = []
    //     books.some(book => {
    //         let isBookAlreadyHasBeenAdded = allProvidedBooksId.includes(book.id)
    //         if (isBookAlreadyHasBeenAdded) {
    //             throw new Error("The book already exists on your list")
    //         }
    //         allProvidedBooksId.push(book.id)
    //     });
    // }

    // static throwErrorIfBookingNotExists = (user, bookingsArray) => {
    //     const result = bookingsArray.some(bookingInArray => bookingInArray.user.id === user.id)
    //     if (!result) {
    //         throw new Error("The booking not exists")
    //     }
    // }

    // static throwErrorIfBookingAlreadyExists = (user,bookingsArray) => {
    //     const result = bookingsArray.some(bookingInArray => {
    //         if (bookingInArray.user.id === user.id) {
    //             console.log(bookingInArray.getBorrowedBooks())
    //         }
    //     })
    //     if (result) {
    //         throw new Error("The booking already exists")
    //     }
    // }
}