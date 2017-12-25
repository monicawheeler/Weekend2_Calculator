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
    console.log('calculationResult', calculationResult);
    return calculationResult;
}

module.exports = {
    calculatorCalcs: calculatorCalcs
}

