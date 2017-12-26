let calcResult = 0;

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
    return calculationResult;
    
    console.log('calculator.js - calculationResult', calculationResult);
}

let returnCalculation = function() {
    return calcResult;
}

module.exports = {
    returnCalculation: returnCalculation,
    calculatorCalcs: calculatorCalcs
};

