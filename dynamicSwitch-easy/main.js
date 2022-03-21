`use strict`

class Switch {
    cases = [];
    conditions = [];

    add(condition, callback) {
        if ((typeof (condition)) !== `boolean`) {
            throw new Error(`It is not a boolean value`)
        }
        if (typeof (callback) !== `function`) {
            throw new Error(`Your value it is not a function`)
        }
        this.conditions.push(condition)
        this.cases.push(callback)
    }

    isValid() {
        let validResult = this.conditions.every(el => el === false)
        for (let i = 0; i < this.conditions.length; i++) {
            if (this.conditions[i] === false) {
                this.cases[i]()
            }
        }
        this.conditions = []
        this.cases = []
        return validResult
    }
    isEmpty() {
        return this.conditions.length <= 0
    }
}

const formChecker = new Switch();
const value = "test";

formChecker.add(value.length < 5, () => {
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