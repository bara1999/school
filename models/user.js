
const connection = require('../connection/index');
class Student {
  #id;
  #name;
  #mobile;
  #dateOfBirth;

  async addUser(student) {
    const isExistingUser = await connection.query(`SELECT * FROM user where lower(name)='${student.name}'`).then(([rows, fields]) => {
      if (rows.length > 0) {
        return true;
      } else return false;
    });

    if (isExistingUser) {
      return "the username already exists in the DB. Please choose another username";
    }

    const sqlQuery = `INSERT INTO user (ID,NAME,DATEOFBIRTH,MOBILE) VALUES (NULL,'${student.name
      }', '${new Date(student.dateOfBirth)}','${student.mobile}')`;

    return await connection.query(sqlQuery)
      .then(([rows, fields]) => {
        return 'successfully added a new user ';
      })
      .catch((err) => err);
  }

  getUser() {
    return {
      name: this.#name,
      DOB: this.#dateOfBirth,
      mobile: this.#mobile,
    };
  }
  async getAllStudents() {

    let results = [];
    await connection.query('SELECT * FROM user')
      .then(([rows, fields]) => {
        results = rows;
      })
      .catch((err) => {
        console.error(err);
        throw new Error('An error occurred while fetching students');
      });
    return results;
  }

}

module.exports = Student;
