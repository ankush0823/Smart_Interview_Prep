function calculateScore(answers){
    let score = 0;

    for(let answer of answers){
        if(answer.isCorrect){
            score += 1;
        }
    }
    return score;

}
module.exports = calculateScore;