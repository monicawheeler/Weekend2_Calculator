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
    $('#clear-button').on('click', clearAll);
} // end calculatorApp

function getCalculation() {
    // Define input values
    let firstNumber = $('#first-number').val();
    let secondNumber = $('#second-number').val();

    // Bundle values into an object
    let calcObject = new Operation(firstNumber, secondNumber, mathOperator);

    // Clear input fields
    $('#first-number').val('');
    $('#second-number').val('');

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
    //console.log('result in displayResults', result);
    // $('#results').append(result);
    
    // Replace results with returned results
    for (let i = 0; i < result.length; i++) {
        //console.log(result[i]);
        $('#results').text(result[i]);
    }
} // end displayResults

function getResults() {
    //console.log('getResults is starting');
    $.ajax({
        method: 'GET',
        url: '/calculator',
        success: function(response) {
            //console.log('getResults GET response:', response);
            displayResults(response);
        }
    });
} // end getResults

function displayHistory(history) {
    // Append DOM with list of history items
    for (let i = 0; i < history.length; i++) {
        var $list = $('<li>');
        $list.append(history[i]);
        console.log(history[i]);
    }
    var historyList = $('#history-list').append($list);
    return historyList;
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
} // end getHistory

function clearAll() {
    $.ajax({
        method: 'DELETE',
        url: '/clearAll',
        success: function(response) {
            console.log('response', response);
            $('#history-list').empty();
            $('#results').html('0');
        }
    });
} // end clearAll