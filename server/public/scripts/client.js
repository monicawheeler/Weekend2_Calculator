console.log('client.js loaded');

let mathOperator = '';

class Operation {
    constructor(x, y, type) {
        this.x = x,
        this.y = y,
        this.type = type
    }
} // end Operation class

$(document).ready(calculatorApp);

function calculatorApp() {
    getHistory();
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
    $('#equals-button').on('click', getCalculation);
} // end calculatorApp

function getCalculation() {
    // Define input values
    let firstNumber = $('#first-number').val();
    let secondNumber = $('#second-number').val();

    // Bundle values into an object
    let calcObject = new Operation(firstNumber, secondNumber, mathOperator);

    $.ajax({
        method: 'POST',
        url: '/calculator',
        data: calcObject,
        success: function(response){
            //console.log('back from POST with:', response);
            getHistory();
            getResults();
        }
    });
} // end inputValues


function displayResults(result) {
    $('.results').append(result);
}

function getResults() {
    //console.log('getResults is starting');
    $.ajax({
        method: 'GET',
        url: '/calculator',
        success: function(response) {
            console.log('getResults GET response:', response);
            displayResults(response);
        }
    });
}

function displayHistory(history) {
    // Append DOM with list of 
    // TODO - loop through history array and append to DOM
    $('#history-list').append('<li>' + history + '</li>');
} // end displayHistory

function getHistory() {
    //console.log('getHistory is happening!');
    $.ajax({
        method: 'GET',
        url: '/history',
        success: function(response) {
            console.log('response in GET in client.js', response);
            displayHistory(response);
        }
    });
}