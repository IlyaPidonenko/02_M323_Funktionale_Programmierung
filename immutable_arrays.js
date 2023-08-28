// 2a
const cat = {
    id: 1,
}
const dog = {
    id: 2,
}
const mouse = {
    id: 3,
}
const horse = {
    id: 4
}

const animalList = [mouse, dog, cat]
// 2b
const animalListUpdate = [...animalList, horse]
// 2c
const newAnimalList = animalListUpdate.map(animal => {
    if (animal.id === 2) {
        return { ...animal, name: "Bob" }
    } else {
        return animal
    }
})
// 2d
const animalListWithoutTheSmallestId = newAnimalList.filter(animal => animal.id !== (Math.min(...newAnimalList.map(animal => animal.id))))

console.log(animalListWithoutTheSmallestId);
// 2e
const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];
const sum = reviews.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const average = sum / reviews.length
console.log(average)
// 2f
function countAndGroupReviews(reviews) {
    return reviews.reduce((groups, review) => {
        if (review >= 4) {
            groups.good++
        } else if (review >= 2.5) {
            groups.ok++
        } else {
            groups.bad++
        }
        return groups
    }, {good: 0, ok: 0, bad: 0})
}
const result = countAndGroupReviews(reviews)
console.log(result)
