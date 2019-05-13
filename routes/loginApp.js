var express = require('express');
var router = express.Router();
var fs = require('fs');
var userName = './routes/';
var passWord = './routes/';

var loginCtrl = require('../controllers/loginCtrl');

router.get('/test',function (req,res) {

});

router.post('/', function(req,res)
{
	var request = {};
	
	request.userName = req.param('userName');
	request.passWord = req.param('passWord');
	
	loginCtrl.login(function (error,results) {
			console.log(results);
			req.session.isLoggedIn = true;
			res.redirect(results);
	},req);

});




module.exports = router;