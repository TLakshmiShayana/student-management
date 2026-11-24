
import React, { useState } from "react";
import "./App.css";

function Header() {
  return <h1 className="header">🎓 Student Management System</h1>;
}

function Student({ name, marks }) {
  return (
    <div className="student">
      <h3>{name}</h3>
      <p>Marks: {marks}</p>
      <span className={marks >= 35 ? "pass" : "fail"}>
        {marks >= 35 ? "PASS" : "FAIL"}
      </span>
    </div>
  );
}

function StudentList() {
  const [students, setStudents] = useState([
    { name: "Ravi", marks: 85 },
    { name: "Sita", marks: 72 },
    { name: "Rahul", marks: 30 },
    { name: "Priya", marks: 45 },
    { name: "Kiran", marks: 20 }
  ]);

  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");

  function addStudent() {
    if (name.trim() === "" || marks === "") {
      alert("Enter student name and marks");
      return;
    }

    if (Number(marks) < 0 || Number(marks) > 100) {
      alert("Marks must be between 0 and 100");
      return;
    }

    setStudents([
      ...students,
      { name: name, marks: Number(marks) }
    ]);

    setName("");
    setMarks("");
  }

  return (
    <div className="container">
      <h2>Add New Student</h2>

      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Student Marks"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
      />

      <button onClick={addStudent}>+ Add Student</button>

      <h2>Student List</h2>

      <div className="student-list">
        {students.map((student, index) => (
          <Student
            key={index}
            name={student.name}
            marks={student.marks}
          />
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return <footer>© 2026 Student Management System</footer>;
}

function App() {
  return (
    <>
      <Header />
      <StudentList />
      <Footer />
    </>
  );
}

export default App;
