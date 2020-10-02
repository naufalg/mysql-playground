const connection = require("../../config/dbSQL");

const exschoolsQuery = `select * from exschools`

module.exports = {
  getAllExschools: (req, res) => {
    connection.query(
      exschoolsQuery,
      (err, data, fields) => {
        if (err) {
          console.log(err);
        } else {
          res.json(data);
        }
      }
    );
  },
  getExschoolsById: (req, res) => {
    connection.query(
      `${exschoolsQuery} where exschools.exschool_id = ${req.params.id}`,
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
