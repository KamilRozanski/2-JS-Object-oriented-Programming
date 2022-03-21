`use strict`

class Switch {
    cases = [];
    conditions = [];

    validation(input, expectedInputType) {
        if ((typeof (input)) !== `${expectedInputType}`) {
            throw new Error(`${input} is not a ${expectedInputType} value`)
        }
    }
    add(condition, callback) {
        this.validation(condition, "boolean")
        this.validation(callback, "function")
        // Czy robic validacje na pusta tablice?
        this.conditions.push(condition)
        this.cases.push(callback)
    }

    isValid() {
        let validationResult = this.conditions.every(el => el === false)
        for (let i = 0; i < this.conditions.length; i++) {
            if (this.conditions[i] === false) {
                this.cases[i]()
            }
        }
        this.conditions = []
        this.cases = []
        return validationResult
    }
    isEmpty() {
        return this.conditions.length <= 0
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