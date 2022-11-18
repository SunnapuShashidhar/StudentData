var newStudentSchema = require("../Modules/Module")
var express = require("express");

var router = express.Router();
//getting data 
router.get("/stu", (req, res) => {
  newStudentSchema.find((err, responce) => {
    if (err)
      res.send("something went wrong");
    else
      res.send(responce);
  })
})
//posting data 
router.post("/list", (req, res) => {

  var newStudent = new newStudentSchema({
    name: req.body.name,
    email: req.body.email,
    dept: req.body.dept,
    number: req.body.number,
    address: req.body.address
  })
  newStudent.save((err, responce) => {

    if (err)
      res.send("error occured");
    else
      res.send({ responce, status: 200, isSuccessful: true });
  })
})

module.exports = router;