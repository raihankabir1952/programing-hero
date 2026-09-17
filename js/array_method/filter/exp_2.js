function getPaaingMarks(students)
{
    return students.filter((student) =>
    {
        return student.marks>=50
    })
}

let result = getPaaingMarks([
    { name: "Raihan", marks: 85 },
    { name: "Kabir", marks: 55 },
    { name: "Sakib", marks: 75 },
    { name: "Nabil", marks: 40 }
]);

console.log(result);