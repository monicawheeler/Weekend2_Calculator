const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const calc = require( './modules/calculator');
const history = require( './modules/calc-history');

const port = 2828;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended:true})); 


app.post('/calculator', function(req, res){
    console.log('/calculator POST hit', req.body);
    // calculatorCalcs generates the calculation
    calc.calculatorCalcs(req.body.x, req.body.y, req.body.type);
    // addHistory is pushing history items to an array
    history.addHistory(req.body.x, req.body.y, req.body.type);
    res.sendStatus(201);
});

app.get('/history', function(req, res) {
    // console.log('history allTheHistory: ', history.allTheHistory());
    res.send(history.allTheHistory());
});

app.get('/calculator', function(req, res) {
    res.send(calc.returnCalculation());
});

app.listen(port, function(){
    console.log('listening on port:', port);
});

