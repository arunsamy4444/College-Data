const Student = require("../models/student_Schema");

exports.createStudents = async (req, res) => {
  const { name, email, regno, year, phoneNo, department } = req.body;

  try {
    const newStudent = new Student({
      name,
      email,
      regno,
      year,
      phoneNo,
      department,
    });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.getSudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.singleStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

}
