const express = require('express');
const { createStudents, getSudents, singleStudent } = require('../controller/student_controller');
const studentRouter = express.Router();

studentRouter.post('/createStudent',createStudents);
studentRouter.get('/getStudent',getSudents);
studentRouter.get('/singleStudent/:id',singleStudent);

module.exports = studentRouter;
