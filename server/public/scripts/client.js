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
    // Define input values
    let firstNumber = $('#first-number').val();
    let secondNumber = $('#second-number').val();

    // Bundle values into an object
    let calcObject = {
        x : firstNumber,
        y : secondNumber,
        type : mathOperator
    };
    
    // Append DOM with list of 
    $('#history-list').append('<li>' + firstNumber + ' ' + mathOperator + ' ' + secondNumber + '</li>');

    $.ajax({
        method: 'POST',
        url: '/calculator',
        data: calcObject,
        success: function(response){
            console.log('back from POST with:', response);
            
        }
    });
}
