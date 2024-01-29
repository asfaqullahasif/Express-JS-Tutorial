
const express=require('express');
const {response} = require("express");
/*
after install express you have to create index.js file and at
 the top of it you should import express-js by this  line of code
 */
app = express();
// after that you should initial express-js by above line of code

app.get('/', function (req,res){
    res.end('My App Home page');
})
// In the above line we have just create  get route method to show a message in the browser.

// N.B: you have to remember that you can show message in the browser using only get method no other method.

app.listen(8080,function(){
    console.log("MyApp is running in 8080 port ");
});

// to run server you have to write app.listen()part of code and provide a port number that you want
