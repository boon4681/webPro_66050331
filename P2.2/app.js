let students = [
    { id: 1, name: "Somchai", score: 48 },
    { id: 2, name: "Somsri", score: 75 },
    { id: 3, name: "Sompong", score: 32 },
    { id: 4, name: "Somnak", score: 85 }
];

students.forEach(a => console.log(`ชื่อนักศึกษา: ${a.name} ได้คะแนน: ${a.score}`))

console.log("double")
let double = students.map(a => ({ ...a, score: a.score * 2 }))

double.forEach(a => console.log(`ชื่อนักศึกษา: ${a.name} ได้คะแนน: ${a.score}`))

console.log("filter")
students.filter(a => a.score > 50).forEach(a => console.log(`ชื่อนักศึกษา: ${a.name} ได้คะแนน: ${a.score}`))

console.log("find")
console.log(students.find(a => a.name == "Somsri"))
