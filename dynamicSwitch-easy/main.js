`use strict`

class Switch {
    cases = [];
    conditions = [];

    add(condition, callback) {
        this.conditions.push(condition)
        if (condition) {
            return callback()
        }
    }

    isValid() {
        for (const condition of this.conditions) {
            console.log(condition, "condition")
            return !condition ? true : console.log("isvalid")
        }
    }
}

const formChecker = new Switch();
const value = "test";

formChecker.add(value.length < 5, () => {
    console.log("input is to short")
})
formChecker.add(value !== "Kamil", () => {
    console.log("The input is not a Kamil")
})
console.log(formChecker.isValid())