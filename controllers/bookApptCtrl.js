var express = require('express');
var router = express.Router();
var fs = require('fs');

exports.login = function(callback, req) {
    console.log("iam in ctrl");
	var err="There was some error."
	
	
	var nutritionist = req.body.nutritionist;
	var day = req.body.day;
	var comment = req.body.comment;
	var time = [];
	time = req.body.time;
	
	for(var i=0;i<time.length;i++){
		console.log(time[i]);
	}
	
	var data = {};
	data.route = 'bookAppointment';
	if(time[0].length>1){
		req.session.bookingTime = time[0];
		data.time = time[0];
	}else{
		req.session.bookingTime = time;
		data.time = time;
	}
	
	callback(err, data);

	//res.send('NOT IMPLEMENTED: Book update GET');
};