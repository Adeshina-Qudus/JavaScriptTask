const increaseScore = (inputerScore)=>{
    const increaseScoreResult = inputerScore.map((element)=> element + 5)
    return increaseScoreResult;
    }
    module.exports = {increaseScore}