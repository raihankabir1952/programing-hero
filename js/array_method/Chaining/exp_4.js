function generateLeaderBoard(students)
{
    return students
    .filter((student) =>
    {
        return student.score>=70
    })
    .sort((a,b) =>
    {
        return b.score - a.score
    })
    .map((student) =>
    {
        // return student.name.toUpperCase()
        return `${student.name.toUpperCase()} : ${student.score}`
    })
    .slice(0,3)
}

let result=generateLeaderBoard([
    { name: "Rafi", score: 90 },
    { name: "Sadia", score: 65 },
    { name: "Karim", score: 85 },
    { name: "Nafis", score: 75 },
    { name: "Raihan", score: 94}
])
console.log(result)