import isOverBudget from "./solid-childClass.js"

class MyBudget {
    constructor(budget) {
        this.budget = budget
        this.money = 0
    }

    expenses(amount) {
        this.money += amount
        if (this.budget < this.money) {
            isOverBudget()
        }
    }
}

const moneyInfo = new MyBudget(1000)
moneyInfo.expenses(10)
moneyInfo.expenses(40)
console.log(moneyInfo)