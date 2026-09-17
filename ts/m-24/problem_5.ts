//Student Result Analyzer
interface Student {
    name: string;
    marks: number[]
}
interface StudentResult {
    name: string;
    average: number;
    result: string;
}
function getStudentResult(student: Student): StudentResult {
    if (student.marks.length === 0) {
        return {
            name: student.name,
            average: 0,
            result: "failed"
        }
    };
    const total = student.marks.reduce((sum, mark) => {
        return sum + mark
    }, 0)
    const average = total / student.marks.length;

    const result = average >= 40 ? "Passed" : "Failed";

    return {
        name: student.name,
        average: average,
        result: result
    };
}

console.log(
    getStudentResult({
        name: "Rafi",
        marks: [58,0,0,4]
    })
);