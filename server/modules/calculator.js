let functionTest = function(x, y, calcType) {
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
    
}

module.exports = {
    functionTest: functionTest
}

