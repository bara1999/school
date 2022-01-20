const express = require("express");
const StudentService = require("../services/student");
const studentRoute = express.Router();
const studentService = new StudentService();

studentRoute.get("/getAllStudents", async (req, res) => {
  res.send(await studentService.getAllStudents().then((res) => res));
});

studentRoute.post("/addNewStudent", async (req, res) => {
  const body = req.body;
  return res.send({ result: await studentService.addNewStudent(body).then((res) => res) });
});


module.exports = studentRoute;
