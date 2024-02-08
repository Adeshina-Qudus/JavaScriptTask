const classTimings = (inputedTime)=>{
    let filter = inputedTime.filter(time =>
    time.substr(time.length -2, time.length - 1) === "PM")
    return filter
}
module.exports = {classTimings}
