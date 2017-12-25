const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const calc = require( './modules/calculator' );

const port = 2828;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended:true})); 

app.post('/calculator', function(req, res){
    //console.log('/calculator POST hit', req.body);
    res.sendStatus(201);
    calc.functionTest(req.body.x, req.body.y, req.body.type);
});

app.listen(port, function(){
    console.log('listening on port:', port);
});

