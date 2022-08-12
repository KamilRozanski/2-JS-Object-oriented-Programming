// Ma miec: listę książek, listę książek dostępnych (które nie zostały wypożyczone),
// lista wyporzyczeń, lista użytkowników

// Ma umożliwiać: 
// - dodawanie książek do listy
// - usuwanie książek z listy
// - wypożyczanie książki dla usera X
// - oddanie wypożyczania książki
export class Library {
    constructor(booking) {
        this.allBooks = booking
        this.allUsers = []
        this.allAvaiableBooks = []
        this.allBorrowedBooks = []
    }



    getAvaiableBooks = () => {
        console.log(this.allBorrowedBooks)
    }

    getAllBorrowedBooks = () => {
        return this.borrowing.getBorrowedBooks()
    }

    getAllBooks = () => {
        return this.allBooks
    }

}