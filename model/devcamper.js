const mongoose = require("mongoose");

const BootcampSchema = mongoose.Schema({
  questionTitle: String,
  correctAnswer: String,
  allAnswer: [String]
});

module.exports = mongoose.model("Bootcamp", BootcampSchema);
