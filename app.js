
// const mysql = require("mysql");

const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("test get");
});

// app.post("/post", (req, res) => {
//   res.send("test post");
// });

// app.put("/put", (req, res) => {
//   res.send("test put");
// });

// app.delete("/delete", (req, res) => {
//   res.send("test delete");
// });

// app.all("/secret", (req, res, next) => {
//   res.send("test secret");
//   next();
// });

// app.get("*", (req, res) => {
//   let body = `<h1>Halaman tidak ditemukan</h1>`;
//   res.send(body);
// });

app.get("/user/:name", (req, res) => {
  res.send(`hello, ${req.params.name}`);
});

// 2020/09/30
// mysql refractored


// ####################unrefractored
// app.get("/students", (req, res) => {
//   connection.query(studentsQuery, (error, data, fields) => {
//     if (error) {
//       console.log(error);
//     } else {
//       res.json(data);
//       // console.log("success connect to /students");
//     }
//   });
// });


// app.get("/students/:id", (req, res) => {
//   connection.query(
//     `${studentsQuery} where students.student_id = ${req.params.id}`,
//     (err, data, fields) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.json(data);
//       }
//     }
//   );
// });

// app.get("/exschool", (req, res) => {
//   // Menjalankan sebuah query
//   connection.query("select * from exschools",
//   (err, data, fields) => {
//     if (err) {
//       console.log(err)
//     } else {
//       res.json(data)
//     }
//   })
// })
// ####################unrefractored
// 2020/09/30

// +++++++++++++++Refractored
const connection = require('./config/dbSQL')

const studentsRouter = require('./routes/students')
const exschoolsRouter = require('./routes/exschool')

connection.connect((error) => {
  if (error) {
    console.log("connection error: ", error.sqlMessage);
  } else {
    console.log("success connect to mysql");
  }
});

app.use("/students", studentsRouter)

app.use("/exschools", exschoolsRouter)



// port express
app.listen(port, () => {
  console.log(`running in port ${port}`);
});
