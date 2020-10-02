var express = require('express');
var router = express.Router();

const {getAllExschools, getExschoolsById} = require("./controller")

router.get("/", getAllExschools)
router.get("/:id", getExschoolsById)


module.exports = router;
