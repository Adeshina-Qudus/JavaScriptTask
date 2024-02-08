const {increaseScore} =require("./IncreaseScoreBy5");
test("increaseScoreBy5Test",()=>{
    let input = [56,78,92,89,95,76,83,92,];
    let output = [61,83,97,94,100,81,88,97];
    let method = increaseScore(input)
    expect(method).toEqual(output);
})