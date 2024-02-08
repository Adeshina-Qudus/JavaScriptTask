const {expenses} = require("./Expenses")
test("testCalculate",()=>{
    let object = {"groceris": 150,
                  "dining out": 100,
                  "transpotation" : 50,
                   "entertainment" : 80}
    let output = expenses(object)
    expect(output).toEqual(380)               
})