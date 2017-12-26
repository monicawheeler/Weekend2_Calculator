let calcResult = [];

let calculatorCalcs = function(x, y, calcType) {
    x = Number(x);
    y = Number(y);
    let calculationResult = 0;
    if(calcType == 'Add') {
        calculationResult = x + y;
    } else if (calcType == 'Subtract') {
        calculationResult = x - y;
    } else if (calcType == 'Multiply') {
        calculationResult = x * y;
    } else { // divide
        calculationResult = x/y;
    }
    calcResult.push(calculationResult);
    
    //console.log('calculator.js - calculationResult', calculationResult);
}

let returnCalculation = function() {
    return calcResult;
}

let clearAll = function() {
    calcResult = [];
}

module.exports = {
    returnCalculation: returnCalculation,
    calculatorCalcs: calculatorCalcs,
    clearAll: clearAll
};

