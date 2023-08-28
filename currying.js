// 3a
const studentGrades = [
    { name: 'Joe', grade: 88 },
    { name: 'Jen', grade: 94 },
    { name: 'Steph', grade: 77 },
    { name: 'Allen', grade: 60 },
    { name: 'Gina', grade: 54 },
];

function getGrade (name) {
    return function (grade) {
        if (grade >= 90) {
            return "Excellent Job " + name + ", you got an a"
        } else if (grade >= 80) {
            return "Nice Job " + name + ", you got an b"
        } else if (grade >= 70) {
            return "Well done " + name + ", you got an c"
        } else if (grade >= 60) {
            return "What happened " + name + ", you got an d"
        } else if (grade >= 50) {
            return "Not good " + name + ", you got an f"
        }
    }
}


const formatFeedback = studentGrades.map(student => getGrade(student.name)(student.grade))
console.log(formatFeedback)

// 3b

const R = require('ramda');

const curryArray = ["String1", "String2", "String3", "String4", "String5"]

function addPrefix(prefix) {
    return function(string) {
        return prefix + string
    }
}

const addPrefixToString = addPrefix("Line ")
const stringWithPrefix = curryArray.map(addPrefixToString)

console.log(stringWithPrefix)

// 3c
// inpure
function calcLength(array) {
    const result = array.length
    console.log(result)
}
// pure
function calcLength(array) {
    return array.length
}
console.log(calcLength(curryArray))

