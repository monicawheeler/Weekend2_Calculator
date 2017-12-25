const express = require('express');
const app = express();



const port = 2828;
app.use(express.static('server/public'));



app.listen(port, function(){
    console.log('listening on port:', port);
});