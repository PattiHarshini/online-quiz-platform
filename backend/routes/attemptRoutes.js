const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  submitQuiz,
  getLeaderboard,
} = require("../controllers/attemptController");

router.post("/submit", auth, submitQuiz);
router.get("/leaderboard/:quizId", getLeaderboard);

module.exports = router;