var mongoose = require("mongoose");


var newStudentSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    require: true,
    unique: true
  },
  dept: String,
  number: Number,
  Address: String

})
module.exports = mongoose.model('list', newStudentSchema)