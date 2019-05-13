var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  
  
  if(req.session.isLoggedIn == true){
  res.render('studentDetails', { sent: 'Express' });
	}else{
		res.redirect('/');
	}
});

router.post('/sendDetails', function(req, res, next) {
	
	var weight = req.param('weight');
	var doCook = req.param('doCook');
	var breakfast = req.param(breakfast);
	var lunch = req.param(lunch);
	var dinner = req.param('doCook');
	var mealCooked = [];
	mealCooked = req.param('mealCooked')
	console.log(mealCooked);
	req.session.hasSubmitted = true;
    res.render('studentDetails', { sent: 'sent' });
});



module.exports = router;