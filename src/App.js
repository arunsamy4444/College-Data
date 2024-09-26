import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Student from './components/Student';
import StudentForm from './components/StudentForm';
import StudentDetail from './components/StudentDetail'; // Import StudentDetail

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Student />} />
          <Route path='/getstudent' element={<StudentForm />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/singlestudent/:id' element={<StudentDetail />} /> {/* Route for student details */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
