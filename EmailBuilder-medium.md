<h2 align="center">Opis zadania EmailBuilder </h2>

<br>

## Wymagana wiedza

- Podstawy Javascript
- Podstawy Typescript
- Podstawy Object Oriented Programming(OOP)
 
## Technologie potrzebne do zadania

- Typescript
- Javascript

## Cele główne

* [ ] Wykorzystując wzorzec projektowy Builder stwórz obiekt json reprezentujacy wszystkie parametry maila (parametry znajdują sie w kodzie poniżej)

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki

- Czym jest wzorzec projektowy "Builder" - https://refactoring.guru/pl/design-patterns/builder
- Filmik o wzorcu "Builder" - https://www.youtube.com/watch?v=M7Xi1yO_s8E

## Kawałek kodu dla lepszego początku!

```javascript
class EmailBuilder{
  constructor() {
    this._mail = {
      from: "",
      to: "",
      title: "",
      cc: [],
      bcc: [],
      html: "",
    };
  }
  
  // Stwórz metody które będą zmieniać parametry from, to, title, cc, bcc, html
  
  buildMail = () => {
   // Sprawdź czy wymagane parametry mają przypisane wartości
   // Zwróć finalnego maila
  }
}
```
