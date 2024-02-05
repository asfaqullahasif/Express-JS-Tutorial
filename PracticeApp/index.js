const express = require('express');

const app = express();

app.get('/',function(req,res){
    res.send("I'm Servers Home page!")
})
app.listen(8000,function (){
    console.log('Server running  port is: 8000');
})