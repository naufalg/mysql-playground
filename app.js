
const mysql = require("mysql");

const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("test get");
});

app.post("/post", (req, res) => {
  res.send("test post");
});

app.put("/put", (req, res) => {
  res.send("test put");
});

app.delete("/delete", (req, res) => {
  res.send("test delete");
});

app.all("/secret", (req, res, next) => {
  res.send("test secret");
  next();
});

// app.get("*", (req, res) => {
//   let body = `<h1>Halaman tidak ditemukan</h1>`;
//   res.send(body);
// });

app.get("/user/:name", (req, res) => {
  res.send(`hello, ${req.params.name}`);
});

// 2020/09/30
// mysql
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "testing",
});

connection.connect((error) => {
  if (error) {
    console.log("connection error: ", error.sqlMessage);
  } else {
    console.log("success connect to mysql");
  }
});

const studentsQuery = `select
 students.student_id,
 students.name,
 students.email,
 students.birth_date,
 exschools.name as exschool_name
 from students join exschools 
 on students.exschool_id = exschools.exschool_id`;

app.get("/students", (req, res) => {
  connection.query(studentsQuery, (error, data, fields) => {
    if (error) {
      console.log(error);
    } else {
      res.json(data);
      // console.log("success connect to /students");
    }
  });
});

app.get("/students/:id", (req, res) => {
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
});

app.get("/exschool", (req, res) => {
  // Menjalankan sebuah query
  connection.query("select * from exschools",
  (err, data, fields) => {
    if (err) {
      console.log(err)
    } else {
      res.json(data)
    }
  })
})
// 2020/09/30


// port express
app.listen(port, () => {
  console.log(`running in port ${port}`);
});
