function getWeakTopics (results){
    const topicStats = {};

    for(let item of results){
        const topic = item.topic;
        const isCorrect = item.isCorrect;
        
        if(!topicStats[topic]){
            topicStats[topic] = {total : 0, correct : 0};
        }
        topicStats [topic].tpta += 1;

        if(isCorrect){
            topicStats[topic].correct += 1;
        }
    }


    const weakTopics = [];
    for( let topic in topicStats){
        const accuracy = (topicStats[topic].correct / topicStats[topic].total) * 100;

        if (accuracy < 60){
            weakTopics.push(topic);
        }
    }
    return weakTopics;
}

module.exports = getWeakTopics;