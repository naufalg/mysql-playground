const connection = require("../../config/dbSQL");

const studentsQuery = `select
 students.student_id,
 students.name,
 students.email,
 students.birth_date,
 exschools.name as exschool_name
 from students join exschools 
 on students.exschool_id = exschools.exschool_id`;

module.exports = {
  getAllStudents: (req, res) => {
    connection.query(studentsQuery, (error, data, fields) => {
      if (error) {
        console.log(error);
      } else {
        res.json(data);
        console.log("success connect to /students");
      }
    });
  },
  getStudentsById: (req, res) => {
    connection.query(
      `${studentsQuery} where students.student_id = ${req.params.id}`,
      (err, data, fields) => {
        if (err) {
          console.log(err);
        } else {
          res.json(data);
        }
      }
    );
  },
};
