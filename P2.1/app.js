let scores = [45, 78, 82, 35, 90];

console.log("while loop")

let i_w = 0
while (i_w < scores.length) {
    console.log(scores[i_w])
    i_w++
}

console.log("for loop")

for (let i_f = 0; i_f < scores.length; i_f++) {
    console.log(scores[i_f])
}

console.log("push 65 and 48")
scores.push(65, 48)
console.log(scores)

console.log("pop")
scores.pop()
console.log(scores)

console.log("includes with 82")
scores = [45, 78, 82, 35, 90];
console.log(scores.includes(82), scores)

console.log("includes without 82")
scores = [45, 78, 35, 90];
console.log(scores.includes(82), scores)


console.log("sort")
scores.sort()
console.log(scores)