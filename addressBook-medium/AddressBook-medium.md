<h2 align="center">Opis zadania AddressBook </h2>

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
* [ ] Wypracuj obiekt charakteryzujący pojedyńczy kontakt
* [ ] Wypracuj obiekt charakteryzujący grupę kontakt
* [ ] Wypracuj obiekt charakteryzujący książkę adresową

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki

- Czym jest OOP - https://www.freecodecamp.org/news/how-javascript-implements-oop/
- Object w JS - https://www.digitalocean.com/community/tutorials/understanding-objects-in-javascript

## Kawałek kodu dla lepszego początku!

```javascript
class Contact {
    // Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji i utworzenia, uuid
    // Ma umożliwiać: aktualizację datę modyfikacji, pozwalac na modyfikację imienia, nazwiska oraz adresu email
}

class Group {
    // Ma mieć: listę kontaktów oraz nazwę grupy oraz uuid
    // Ma umożliwiać: zmianę nazwy grupy, można dodać lub usunac kontakt z grupy, można sprawdzić czy kontakt istnieje w grupie
}

class AddressBook {
// Ma mieć: listę wszystkich kontaktów, listę grup kontaktów 
// Ma umożliwiać: szukanie kontaktu po frazie, dodawanie/usuwanie/modyfikacje nowych kontaktów, dodawanie/usuwanie/modyfikacje nowych grup
}
```
