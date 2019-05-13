var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	if(req.session.isLoggedIn == true){
  res.render('bookAppointment', { bookedTime: '0' });
	}	else{
		res.redirect('/');
	}
});

router.post('/book', function(req, res, next) {
	
	var nutritionist = req.param('nutritionist');
	var day = req.param('day');
	var comment = req.param(comment);
	//var lunch = req.param(lunch);
	//var dinner = req.param('doCook');
	var time = [];
	time = req.param('time');
	console.log(time);
	for(var i=0;i<time.length;i++){
		console.log(time[i]);
	}
	if(time[0].length>1){
		req.session.bookingTime = time[0];
		res.render('bookAppointment', { bookedTime: time[0] });
	}else{
		req.session.bookingTime = time;
		res.render('bookAppointment', { bookedTime: time });
	}

});

module.exports = router;


