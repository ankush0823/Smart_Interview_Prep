function calculateAccuracy (correctAnswer, totalAnswer){
    if(total === 0){
        return 0;
    }

    return ((correctAnswer/totalAnswer)*100).toFixed(2) ;
}

module.exports = calculateAccuracy;