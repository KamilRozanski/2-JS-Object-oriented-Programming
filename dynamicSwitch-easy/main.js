`use strict`

class Switch {
    cases = [];
    conditions = [];

    add(condition, callback) {
        this.conditions.push(condition)
        this.cases.push(callback)
        // console.log(this.conditions)
    }

    isValid() {
        const isValid = this.conditions.reduce((acc, el, index) => {
            // console.log(el, index)
            return el === false ? this.cases[index]() : true
        }, 0)
        this.conditions = []
        this.cases = []
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
formChecker.add(value !== "Kamil", () => {
    console.error("The input is not a Kamil")
})
formChecker.add(value !== "test", () => {
    console.error("The input is not a test")
})

console.log(formChecker.isEmpty() + " isEmpty") // false
console.log(formChecker.isValid() + " isValid"); // === false
console.log(formChecker.isEmpty() + " isEmpty") // === true