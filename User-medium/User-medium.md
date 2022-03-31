<h2 align="center">Opis zadania User </h2>

<br>

## Wymagana wiedza

- Solidne podstawy JS-a.
- Podstawy Object Oriented Programming(OOP)

## Technologie potrzebne do zadania

- Typescript
- Javascript

## Cele główne

- [ ] Stwórz dwie klasy dla struktury danych związanych z użytkownikiem(wytyczne w kodzie poniżej)
- [ ] Klasa User ma dostępne dwa poziomy dostępu: normal i admin.
- [ ] Powinna umożliwiać zmianę hasła, emaila oraz poziomu dostępu.
- [ ] User z poziomem dostępu = "admin" może zmieniać hasła,emaile oraz poziomy dostępu innych użytkowników.
- [ ] Klasa App powinna zarządzać relacjami pomiędzy użytkownikami.
- [ ] Zawiera listę użytkowników, pozwala tworzyć nowych użytkowników o różnych poziomach dostępu.

## Cele opcjonalne do wykonania

- [ ] Stwórz klase pomocniczną Validator, która będzie posiadała metody statyczne odpowiedzalne za walidacje usera. Jeżeli któraś z walidacji się nie powiedzie, instancja ma nie być tworzona, tylko ma zwracać error z odpowiednim komunikatem o niepowiedzionej walidacji. W razie problemów przy tworzeniu klasy validator, polecam zapoznać się z dokumentacja biblioteki is.js.

## Przydatne linki

- Świetna dokumentacja is.js - https://github.com/arasatasaygin/is.js
- Czym jest design pattern "Singleton" - https://refactoring.guru/pl/design-patterns/singleton

## Kawałek kodu dla lepszego początku!

```javascript
// Podczas walidacji upewnij się, że:
// - email jest poprawnym emailem
// - hasło ma mieć min 8 znaków, co najmniej jedną wielką literę i co najmniej jedną cyfrę oraz co najmniej 1 znak specjalny
// - płeć musi być ze zbioru [male, female]
// - data (nieważne jaka wejdzie) do konstruktora musi wejść w formacie MM/DD/YYYY
// - imię i nazwisko musi być niepuste

class User{
 imię
 nazwisko
 datę urodzenia
 hasło
 płeć
 adres email
 poziom dostępu = "user" | "admin")
}

class App{
 listOfUsers
 createUser(...)
 createAdmin(...)
 wszystkie metody w których admin ingeruje we właściwości innych użytkowników
}
```
