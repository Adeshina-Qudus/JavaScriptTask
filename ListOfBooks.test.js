const {distribute} = require("./ListOfBooks");
test("distributeBooksTest",()=>{
    let listOfMembers = ["Emily","Jack","Sophia","Daniel"]
    let listOfBooks = ["Book1","Book2","Book3","Book4"]
    let output = distribute(listOfMembers,listOfBooks)
    let result = ["Emily was given Book1",
                  "Jack was given Book2",
                  "Sophia was given Book3",
                  "Daniel was given Book4"]
    expect(output).toEqual(result)
})
