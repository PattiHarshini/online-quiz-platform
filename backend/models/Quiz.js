const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correctAnswer: Number,
});

const quizSchema = new mongoose.Schema({
  title: String,
  questions: [questionSchema],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  code: String,
});

module.exports = mongoose.model("Quiz", quizSchema);