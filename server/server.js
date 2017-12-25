const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 2828;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended:true})); 

app.post('/calculator', function(req, res){
    console.log('/calculator POST hit', req.body);
    res.sendStatus(201);    
});

app.listen(port, function(){
    console.log('listening on port:', port);
});