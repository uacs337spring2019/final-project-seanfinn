/*
Sean Finn

CSC337

chatit_service.js

This file is responsible for all the code to run a node server with this code.
*/

"use strict";
const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.static('public'));

app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
	next()
})
app.use(express.static('public'));
console.log("web service started FATCOCK");

const bodyParser= require('body-parser');
const jsonParser= bodyParser.json();
app.post('wedding.html', jsonParser, function (req, res) {
	let content = req.body["firstname"]+":::"+req.body["lastname"]+":::"+req.body["phone"]+":::"+req.body["email"]+":::"+req.body["plusfirst"]+":::"+req.body["pluslast"]+":::"+req.body["message"]+"\n";
	fs.appendFile("rsvp.txt", content, function(err){
		if (err){
			return console.log(err);
		}
		console.log("The file was saved")
	})
});

app.listen(process.env.PORT);
