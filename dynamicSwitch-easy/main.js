`use strict`

class Switch {
    cases = [];
    conditions = [];

    add(condition, callback) {
        this.cases.push(callback)
        this.conditions.push(condition)
        return condition ? console.log(true) : callback()
    }

    isValid() {

        for (const condition of this.conditions) {
            return !condition ? true : console.log("isValid")
        }
    }


}

const formChecker = new Switch();
const value = "test";

formChecker.add(value.length < 10, () => {
    console.log("error")
})
formChecker.add(value === 10, () => {
    console.log("This is not a number 10")
})