const Quiz = require("../models/Quiz");

// CREATE QUIZ
exports.createQuiz = async (req, res) => {
  try {
    const { title, questions } = req.body;

    const code = Math.random().toString(36).substring(2, 8);

    const quiz = await Quiz.create({
      title,
      questions,
      createdBy: req.user.id,
      code,
    });

    res.json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET QUIZ BY CODE
exports.getQuizByCode = async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ code: req.params.code });

    if (!quiz) return res.status(404).json({ message: "Quiz not found" });

    res.json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};