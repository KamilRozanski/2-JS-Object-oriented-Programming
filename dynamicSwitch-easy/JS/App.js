import {
    Switch
} from "./Switch.js"

const formChecker = new Switch();
const testValue = "Hello Word"

formChecker.addCase(typeof testValue !== "string", () => {
    console.error("Value is not a string")
})
formChecker.addCase(testValue.length < 5, () => {
    console.error("Value must have at least five characters")
})