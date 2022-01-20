const Student = require("../models/user");
const studentService = new Student();

class StudentService {
  async getAllStudents() {
    console.log("returned", await studentService.getAllStudents());
    return await studentService.getAllStudents().then((res) => res);
  }
  

  async addNewStudent(student) {
    if (student.name && student.name.length <= 0) {
      return "username should be greater than 0";
    } else if (student.dateOfBirth && student.dateOfBirth.length <= 0) {
      return "dateOfBirth should be greater than 0";
    } else if (student.mobile && student.mobile.length <= 0) {
      return "mobile should be greater than 0";
    } else {
      return await studentService.addUser(student).then((response) => response);
    }
  }
}

module.exports = StudentService;
