var express = require('express');
var router = express.Router();

const {getAllStudents, getStudentsById} = require("./controller")

router.get("/", getAllStudents)
router.get("/:id", getStudentsById)


module.exports = router;
