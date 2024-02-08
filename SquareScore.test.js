const {squareScore} = require("./SquareScore");
test("squareScoreTest",()=>{
    let inputedScores = [2,4,6,8,10];
    let scores = squareScore(inputedScores);
    expect(scores).toEqual([4,16,36,64,100])
})
