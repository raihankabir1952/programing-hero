function marksTotal(students)
{
    return students
    .filter((student) =>
    {
        return student.marks>=70
    })

    .map((student) =>
    {
        return student.name.toUpperCase();
    })
}

let result=marksTotal([
    { name: "Raihan", marks: 90 },
    { name: "Kabir", marks: 60 },
    { name: "Sakib", marks: 80 },
    { name: "Nabil", marks: 50 }
])

console.log(result)