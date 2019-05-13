var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  
  	if(req.session.isLoggedIn == true){
		if(req.session.hasSubmitted == true){
			res.render('report', { sent: 'Express' });
		}else{
			res.redirect('invalid');
		}
  
	}	else{
		res.redirect('/');
	}
});

module.exports = router;
