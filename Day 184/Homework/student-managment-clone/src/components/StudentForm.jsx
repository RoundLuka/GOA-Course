import { useState } from "react";

function StudentForm({ onAdd }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !age || !email) return;
        const newStudent = {
            id: Date.now(),
            name,
            age,
            email,
        };
        onAdd(newStudent);
        setName("");
        setAge("");
        setEmail("");
    };

    return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input type="text" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
        <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Add student</button>
    </form>
    );
}

export default StudentForm;
