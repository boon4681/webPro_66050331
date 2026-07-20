
// normal
{
    function calculateGrade(score) {
        if (score >= 80) {
            return "A"
        }
        if (score >= 60) {
            return "B"
        }
        return "F"
    }
}
const calculateGrade = (score) => {
    if (score >= 80) {
        return "A"
    }
    if (score >= 60) {
        return "B"
    }
    return "F"
}

console.log(calculateGrade(50))
console.log(calculateGrade(60))
console.log(calculateGrade(80))