const Attempt = require("../models/Attempt");

// SUBMIT QUIZ
exports.submitQuiz = async (req, res) => {
  try {
    const { quizId, score } = req.body;

    const attempt = await Attempt.create({
      user: req.user.id,
      quiz: quizId,
      score,
    });

    res.json(attempt);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// LEADERBOARD
exports.getLeaderboard = async (req, res) => {
  try {
    const data = await Attempt.find({ quiz: req.params.quizId })
      .populate("user", "username")
      .sort({ score: -1 });

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};