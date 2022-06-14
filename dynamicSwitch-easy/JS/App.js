import {
    Switch
} from "./Switch.js"

const formChecker = new Switch();
const testValue = "Hello Word"

formChecker.add(typeof testValue !== "string", () => {
    console.error("Value is not a string")
})
formChecker.add(testValue.length < 5, () => {
    console.error("Value must have at least five characters")
})
// formChecker.add(testValue === "Hello Word", () => {
//     console.error("Value is not a string")
// })
// formChecker.add(testValue.length > 5, () => {
//     console.error("Value must have at least five characters")
// })


console.log(formChecker.isValid())