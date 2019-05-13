var express = require('express');
var router = express.Router();
var fs = require('fs');
var userName = './routes/';
var passWord = './routes/';

exports.login = function(callback, req) {
    console.log("iam in ctrl");
	var err="There was some error."
	var userName = req.body.userName;
	var passWord = req.body.passWord;
	
	if(userName == "admin" && passWord =="admin123"){
		callback(err, 'home');
	}
	else{
		callback(err, '/');
	}
	
	//res.send('NOT IMPLEMENTED: Book update GET');
};