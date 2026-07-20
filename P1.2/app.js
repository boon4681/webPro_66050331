const v = prompt()

const n = Number(v)

if (n >= 0 && n <= 100) {
    if (n >= 50) {
        console.log("สอบผ่าน")
    }
    else {
        console.log("สอบไม่ผ่าน")
    }
}
console.log(v == 50)
console.log(v === 50)