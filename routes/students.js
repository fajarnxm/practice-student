var express = require('express');
const { route } = require('.');
const { createStudent, getAllStudents, getStudent } = require('../controllers/student');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

/* POST a student */

router.post('/', createStudent)
router.get('/', getAllStudents)
router.get('/:id', getAllStudents)

module.exports = router;


