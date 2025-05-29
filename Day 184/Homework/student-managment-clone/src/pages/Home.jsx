import { useState } from "react";
import StudentForm from "../components/StudentForm";

const Home = () => {
    const [students, setStudents] = useState([]);

    const handleAddStudent = (student) => {
        setStudents([...students, student]);
    };

    return (
            <div>
            <h1>Welcome</h1>
            <StudentForm onAdd={handleAddStudent} />
            <ul>
                {students.map((s) => (
                <li key={s.id}>
                    {s.name}, {s.age} years old, {s.email}
                </li>
                ))}
            </ul>
            </div>
        );
    };

export default Home;
