/*
Sean Finn

CSC337

index.js

This file is responsible for all the code to run a node server on herokuapp.
*/

"use strict";
const express = require("express");
const app = express();
const fs = require("fs");
const path = require('path');
app.use(express.static('public'));
var port = process.env.PORT || 5000;

app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
	next()
})
app.use(express.static('public'));
console.log("web service started");

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname, 'public/wedding.html'));
});

const bodyParser= require('body-parser');
const jsonParser= bodyParser.json();
console.log("who knows")
app.post('https://seanfinntestwedding.herokuapp.com/', jsonParser, function (req, res) {
	let content = req.body["firstname"]+":::"+req.body["lastname"]+":::"+req.body["phone"]+":::"+req.body["email"]+":::"+req.body["plusfirst"]+":::"+req.body["pluslast"]+":::"+req.body["message"]+"\n";
	fs.appendFile("public/rsvp.txt", content, function(err){
		if (err){
			return console.log(err);
		}
		console.log("The file was saved")
	})
});

app.listen(port, function(err){
	console.log('running server on port '+port);
});
