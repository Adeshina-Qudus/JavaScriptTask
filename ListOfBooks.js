const distribute = (listOfMembers,listOfBook)=>{
    let counter  = 0;
    let newarray  =[]
    for (const iterator of listOfMembers) {
        newarray.push(iterator+" was given "+listOfBook[counter])
        counter++;
    }
    return newarray;
    }
    module.exports = {distribute}