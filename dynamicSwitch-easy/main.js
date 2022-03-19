`use strict`

class Switch {
    cases = [];
    conditions = [];

    add(condition, callback) {
        this.conditions.push(condition)
        // console.log(`${this.conditions} conditions array`)
        if (condition) {
            return callback()
        }
    }

    isValid() {
        for (const condition of this.conditions) {
            // console.log(condition, "condition")
            if (!condition) {
                return true
            } else {
                this.conditions = []
                this.isEmpty()
            }
        }
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
console.log(formChecker.isEmpty() + " isEmpty") // false
console.log(formChecker.isValid() + " isValid"); // === false
console.group(formChecker.isEmpty() + " isEmpty") // === true