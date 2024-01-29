
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
app.get('/greet',function(req,res){
    res.send('<h1>Good morning Express-Js Learners <span style=\'font-size:100px;\'>&#128330;</span></h1>');
})
app.post('/crate', function(req,res){
    res.send("<h1>The page is created</h1>");
})
app.put('/update',function(req,res){
    res.end("<h1>The page is Updated</h1>");

})
app.delete('/delete',function(req,res){
    res.send("<h1>The page is deleted</h1>");
})
app.get('/contact', function(req,res){
    res.send("<h1>I'm the Contact Page!</h1>")
})
// In the above line we have just create  get route method to show a message in the browser.

// N.B: you have to remember that you can show message in the browser using only get method no other method.

app.listen(8080,function(){
    console.log("MyApp is running in 8080 port ");
});

// to run server you have to write app.listen()part of code and provide a port number that you want
