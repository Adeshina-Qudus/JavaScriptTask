const {classTimings} = require("./ClassTimings")
test("classTimingsTest",()=>{
    let inputedTime = ["9:00 AM","11:00 AM","1:00 PM","3:00 PM","5:00 PM"]
    let result = classTimings(inputedTime)
    expect(result).toEqual(["1:00 PM","3:00 PM","5:00 PM"])
})