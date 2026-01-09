const calculateAccuracy = require("../utils/accuracy");
const calculateScore = require("../utils/score");
const getWeakTopics = require("../utils/analysis");

const answers = [
    { questionId: 1, isCorrect: true },
    { questionId: 2, isCorrect: false },
    { questionId: 3, isCorrect: true },
];

const topicResults = [
    { topic: "Arrays", isCorrect: true },
    { topic: "Arrays", isCorrect: false },
    { topic: "Strings", isCorrect: false },
    { topic: "Strings", isCorrect: false },
];

console.log("Score:", calculateScore(answers));
console.log("Accuracy:", calculateAccuracy(2, 3), "%");
console.log("Weak Topics:", getWeakTopics(topicResults));

module.exports = sampleResults;
