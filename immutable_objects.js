// 1b
const NON_CHANGE_VARIABLE = 3;
// 1c
const person = {
    firstName: "Ilja",
    lastName: "Pidonenko",
    age: 21,
    hobby: ["gym", "gaming"]
}
// 1d
const personUpdate = {
    ...person,
    doesHaveOneCat: true
}
console.log(personUpdate)
// 1e
const personSecondUpdate = {
    ...personUpdate,
    hobby: ["gym", "gaming", "basketball"]
}
console.log(personSecondUpdate)
// 1f
const {doesHaveOneCat, ...personWithoutCatInfo} = personSecondUpdate

console.log(personWithoutCatInfo)
