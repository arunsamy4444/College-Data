import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Student = () => {
  const [students, setStudents] = useState([]);
  const [input, setInput] = useState(''); // State for search input

  const getStudents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/getStudent');
      setStudents(response.data);  // Axios automatically parses JSON response
    } catch (error) {
      console.error("There was an error fetching the students!", error);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  // Filter students based on search input
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div>
      <a href="/login">Login</a><br />
      <a href="/signup">SignUp</a><br />
      <a href="/getstudent">Student Form</a>
      <h2>Students</h2>
      
      {/* Search input */}
      <input 
        type="text" 
        placeholder='Enter to Search' 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
      />
      
      <ul>
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <div key={student._id}>
              <li>{student.name}</li>
              <p>Department: {student.department}</p>
              <Link to={`/singlestudent/${student._id}`}>View Details</Link>
            </div>
          ))
        ) : (
          <p>No students found</p>
        )}
      </ul>
    </div>
  );
};

export default Student;
