import type { Student } from "./type/Student";

interface StudentListProps {
  students: Student[];
}

function StudentList({ students }: StudentListProps) {
  return (
    <ul className="common">
      {students.map((student) => (
        <li key={student.id}>
          <p>Name: {student.name}</p>
          <p>Grade: {student.grade}</p>

          <p>
            {student.grade >= 40 ? "Pass" : "Fail"}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default StudentList;