console.log('client.js loaded');
let mathOperator = '';

$(document).ready(calculatorApp);

function calculatorApp() {
    // Event Listeners
    $('#add-button').on('click', function() {
        mathOperator = 'Add';
    });
    $('#subtract-button').on('click', function() {
        mathOperator = 'Subtract';
    });
    $('#multiply-button').on('click', function() {
        mathOperator = 'Multiply';
    });
    $('#divide-button').on('click', function() {
        mathOperator = 'Divide';
    });
    $('#equals-button').on('click', inputValues);
}

function inputValues() {
    let firstNumber = $('#first-number').val();
    let secondNumber = $('#second-number').val();

    let calcObject = {
        x : firstNumber,
        y : secondNumber,
        operator : mathOperator
    };

    console.log('calcObject:', calcObject);
    

    $('#history-list').append('<li>' + firstNumber + ' ' + mathOperator + ' ' + secondNumber + '</li>');
}
