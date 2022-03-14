import budgetSummary from "./solid-childClass.js"


class Budget {
    constructor(budget) {
        this.budget = budget
    }

    budgetCalculation(amount) {
        this.budget -= amount
        budgetSummary(amount, this.budget)
    }
}

class Company {
    constructor() {
        this.roles = ['mechanic', 'menager', 'head of department'];
    }

    diplayRoles() {
        this.roles.forEach(el => console.log(el));
    }

    addRole(role) {
        this.roles.push(role);
    }

}

class ManBudget extends Budget {
    constructor(budget) {
        super(budget)
    }
}


const moneyInfo = new Budget(1000)
moneyInfo.budgetCalculation(10)

//Liskow
const manBudget = new ManBudget(100)
manBudget.budgetCalculation(20)




class Student {
    constructor(name) {
        this.name = name;
        this.grades = [];
    }

    addGrade = (grade) => {
        this.grades.push(grade);
    }
}

class GradeBook {
    constructor() {
        this.students = [];
    }

    addStudent = (student) => {
        this.students.push(student);
    }

    addGrade = (student, grade) => {
        const gradedStudent = this.students.filter(...);
        gradedStudent.grades.push(grade);
    }
}