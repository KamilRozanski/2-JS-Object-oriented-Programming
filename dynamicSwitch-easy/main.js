`use strict`

class Switch {
    constructor() {
        this.cases = [];
        this.conditions = [];
    }

    add(condition, callback) {
        // Robic validacje na pustą tablice.
        this.conditions.push(condition)
        this.cases.push(callback)
    }

    isValid() {
        // to można zrobić w jednej pętli
        const isValidChecker = this.conditions.map((el, index) => el === true ? this.cases[index]() : false)
        return isValidChecker.every(el => el === false)
    }
    isEmpty() {
        return this.conditions.length === 0 && this.cases.length === 0
    }
}

class SwitchValidator {
    // osobna klasa na walidację, najlepiej statyczna
    constructor() {

    }
    validator = (input, expectedInputType) => {
        if ((typeof (input)) !== `${expectedInputType}`) {
            throw new Error(`${input} is not a ${expectedInputType} value`)
        }
    }
}



const formChecker = new Switch();
const value = "test";

formChecker.add(value.length > 5, () => {
    console.error("input is to short")
})
formChecker.add(value === "Kamil", () => {
    console.error("The input is not a Kamil")
})
formChecker.add(value !== "test", () => {
    console.error("The input is not a test")
})

console.log(formChecker.isEmpty() + " isEmpty") // false
console.log(formChecker.isValid() + " isValid"); // === false
console.log(formChecker.isEmpty() + " isEmpty") // === true