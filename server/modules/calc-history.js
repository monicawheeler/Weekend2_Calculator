// create array to hold historical data
let historicalData = [];

//  update the historicalData array with new history item
let addHistory = function(x, y, type) {
    let operator = '';
    if (type == "Add") {
        operator = '+'
    } else if(type == "Subtract") {
        operator = '-'
    } else if(type == "Multiply") {
        operator = '*'
    } else {
        operator = '/'
    }
    historicalData.push(x + ' ' + operator + ' ' + y);
}

// return all the historical data history
let allTheHistory = function() {
    return historicalData;
}

let clearAll = function() {
    historicalData = [];
}

module.exports = {
    allTheHistory : allTheHistory,
    addHistory : addHistory,
    clearAll: clearAll
};
