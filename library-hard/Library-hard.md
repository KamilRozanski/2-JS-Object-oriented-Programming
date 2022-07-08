<h2 align="center">Opis zadania Library </h2>

<br>

## Wymagana wiedza
- Podstawy Javascript
- Podstawy Typescript
- Podstawy Object Oriented Programming(OOP)
 
## Technologie potrzebne do zadania

- Typescript
- Javascript

## Cele główne

* [ ] Stwórz strukturę danych związaną z biblioteką, pełen opis znajduję się w kodzie poniżej
* [ ] Wypracuj obiekt charakteryzujący użytkownika
* [ ] Wypracuj obiekt charakteryzujący książkę
* [ ] Wypracuj obiekt charakteryzujący wypożyczenie
* [ ] Wypracuj obiekt charakteryzujący bibliotekę

## Cele opcjonalne do wykonania

* [ ] Dodaj możliwość posiadania więcej niż jednej książki w bibliotece - będzie trzeba zmienić logikę dodawania i usuwania książki z biblioteki (np. jeżeli książka jest już w bibliotece to dodajemy do niej kolejną sztukę). Wtedy klasa Book będzie musiała mieć parametr quantity oraz metodę changeQuantity.

## Przydatne linki

- Czym jest OOP - https://www.freecodecamp.org/news/how-javascript-implements-oop/
- Object w JS - https://www.digitalocean.com/community/tutorials/understanding-objects-in-javascript

## Kawałek kodu dla lepszego początku!

```javascript
class User {
    // Ma miec: Imie, Nazwisko, uuid
} 

class Book {
    // Ma miec: Tytuł, Autora, uuid, losowe zdjęcie oraz krótki opis
}

class Booking {
    // Booking dostaje użytkownika w constructorze

    // Ma mieć: datę wypożyczenia, datę zwrotu (+7d od wypożyczenia), listę wypożyczonych książek, kara
    
    // Ma umożliwiać: 
    // - usuwanie i dodawanie książki do listy wyporzyczonych książek
    // - zwrot - jeśli odbędzie się terminowo kara jest 0 - jesli nie - 
    // każdy dzień zwłoki to naliczenie jakiejś kary. 
}

class Library {
    // Ma miec: listę książek, listę książek dostępnych (które nie zostały wypożyczone),
    // lista wyporzyczeń, lista użytkowników
    
    // Ma umożliwiać: 
    // - dodawanie książek do listy
    // - usuwanie książek z listy
    // - wypożyczanie książki dla usera X
    // - oddanie wypożyczania książki
}
```
