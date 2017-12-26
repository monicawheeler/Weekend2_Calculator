// create array to hold historical data
let historicalData = ['1 + 2 = 3'];

//  update the historicalData array with new history item
let addHistory = function(x, y, type) {
    historicalData.push(x + ' ' + y + ' ' + type);
}

// return all the historical data history
let allTheHistory = function() {
    return historicalData;
}

module.exports = {
    allTheHistory : allTheHistory,
    addHistory : addHistory
};
