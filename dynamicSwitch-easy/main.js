`use strict`

class Switch {
    cases = [];
    conditions = [];

    add(condition, callback) {
        this.conditions.push(condition)
        this.cases.push(callback)
    }

    isValid() {
        return this.conditions.reduce((acc, el, index) => {
            el === true ? this.cases[index]() : false
        }, 0)
    }
    isEmpty() {
        // console.log(this.conditions)
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

console.log(formChecker.isEmpty() + " isEmpty") // false
console.log(formChecker.isValid() + " isValid"); // === false
console.log(formChecker.isEmpty() + " isEmpty") // === true