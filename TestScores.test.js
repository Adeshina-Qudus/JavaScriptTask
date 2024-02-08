const {testScores} = require("./TestScores");
test("scoresGreaterThan70Test",()=>{
    let inputedScores = [34,56,90,80,20,24,56,78,90,10];
    let scoresGreaterOrEqual = testScores(inputedScores);
    expect(scoresGreaterOrEqual).toEqual([90,80,78,90])
})