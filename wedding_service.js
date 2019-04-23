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

app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
	next()
})
app.use(express.static('public'));
console.log("web service started");

app.get('/', function (req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	let json = {};
	let file = fs.readFileSync("messages.txt", 'utf8')
	let lines = file.split("\n");
	let innerList = [];
	for (let i = 0; i < lines.length - 1; i++) {
		let innerDict = {};
		let splitMsg = lines[i].split(":::")
		innerDict["firstname"] = splitMsg[0];
		innerDict["lastname"] = splitMsg[1];
    innerDict["phone"] = splitMsg[2];
    innerDict["email"] = splitMsg[3];
		innerDict["plusfirst"] = splitMsg[3];
		innerDict["pluslast"] = splitMsg[3];
		innerDict["message"] = splitMsg[3];
		innerList.push(innerDict);
	}
	json["messages"] = innerList;
	res.send(JSON.stringify(json));
})

const bodyParser= require('body-parser');
const jsonParser= bodyParser.json();
app.post('/', jsonParser, function (req, res) {
	let content = req.body["firstname"]+":::"+req.body["lastname"]+":::"+req.body["phone"]+":::"+req.body["email"]+":::"+req.body["plusfirst"]+":::"+req.body["pluslast"]+":::"+req.body["message"]+"\n";
	fs.appendFile("rsvp.txt", content, function(err){
		if (err){
			return console.log(err);
		}
		console.log("The file was saved")
	})
});

app.listen(3000);
