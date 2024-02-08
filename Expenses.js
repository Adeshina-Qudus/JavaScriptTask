const expenses = (object) =>{
    let totalExpenses = 0;
    for (const key in object) {
        totalExpenses += object[key];
    }
    return totalExpenses;
}
module.exports = {expenses}