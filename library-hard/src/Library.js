// Ma miec: listę książek, listę książek dostępnych (które nie zostały wypożyczone),
// lista wyporzyczeń, lista użytkowników

// Ma umożliwiać: 
// - dodawanie książek do listy
// - usuwanie książek z listy
// - wypożyczanie książki dla usera X
// - oddanie wypożyczania książki
export class Library {
    constructor(...books) {
        this.allBooks = books
        this.allAvaiableBooks = []
        this.allBorrowedBooks = []
        this.allUsers = []
    }
}