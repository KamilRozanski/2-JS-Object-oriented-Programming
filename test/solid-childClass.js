export default

function budgetSummary(spendAmount, budget) {
    budget < spendAmount ? console.log(`You are over ${budget}$ of budget`) : console.log(`Your budget is ${budget}$`)
}