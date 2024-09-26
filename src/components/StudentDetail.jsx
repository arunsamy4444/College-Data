import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const StudentDetail = () => {
  const { id } = useParams(); // Get the student ID from the URL
  const [student, setStudent] = useState(null);

  const getStudentDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/singleStudent/${id}`);
      setStudent(response.data);  // Set the student data
    } catch (error) {
      console.error("There was an error fetching the student details!", error);
    }
  };

  useEffect(() => {
    getStudentDetails(); // Fetch student details when the component is mounted
  }, [id]);

  if (!student) {
    return <p>Loading student details...</p>;
  }

  return (
    <div>
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Reg No:</strong> {student.regno}</p>
      <p><strong>Year:</strong> {student.year}</p>
      <p><strong>Phone No:</strong> {student.phoneNo}</p>
      <p><strong>Department:</strong> {student.department}</p>
    </div>
  );
};

export default StudentDetail;
