const testScores = (inputedScores)=>{
    let filter = inputedScores.filter(element => element >= 70)
    return filter;
}
module.exports = {testScores}