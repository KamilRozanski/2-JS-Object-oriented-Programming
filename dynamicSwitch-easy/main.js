`use strict`

class Switch {
    constructor() {
        this.cases = [];
        this.conditions = [];
    }


    add = (condition, callback) => {
        this.conditions.push(condition)
        this.cases.push(callback)
    }

    isValid = () => {
        const isValidChecker = this.conditions.map((el, index) => {
            if (el) {
                this.cases[index]()
                return el
            }
            return false
        })
        this.cases = []
        this.conditions = []
        return isValidChecker.every(el => el === false)
    }

    isEmpty = () => {
        return this.conditions.length === 0 && this.cases.length === 0
    }
}

class ValidateSwitch extends Switch {
    constructor() {
        super()
    }
    static validator = () => {
        console.log(this.conditions)


    }

}


const formChecker = new Switch();
console.log(ValidateSwitch.validator())
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