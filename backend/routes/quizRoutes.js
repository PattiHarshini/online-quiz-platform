const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  createQuiz,
  getQuizByCode,
} = require("../controllers/quizController");

router.post("/create", auth, createQuiz);
router.get("/:code", getQuizByCode);

module.exports = router;