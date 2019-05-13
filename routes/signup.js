var express = require('express');
var router = express.Router();
var fs = require('fs');
var userName = './routes/';
var passWord = './routes/';
var name = './routes/';
var emailID = './routes/';
var confPassword = './routes/';
var phoneNo = './routes/';

router.get('/test',function (req,res) {

});

router.post('/signup', function(req,res)
{
	var response = "";
	//testFolder = req.param('dir');
	//console.log(testFolder);
	
	userName = req.param('userName');
	passWord = req.param('passWord');
	name = req.param('userName');
	phoneNo = req.param('passWord');
	emailID = req.param('userName');
	confPassword = req.param('passWord');
	var userDetails = {};
	userDetails.userName = userName;
	userDetails.passWord = passWord;
	userDetails.name = name;
	userDetails.phoneNo = phoneNo;
	userDetails.emailID = emailID;
	userDetails.confPassword = confPassword;
	
	response = userDetails;
	res.send(response);
	alert("Details submitted successfully!!");
});

module.exports = router;