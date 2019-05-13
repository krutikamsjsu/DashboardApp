var express = require('express');
var router = express.Router();
//const images = [{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Hl9Cle8kgMm43GigkPeaJLcvRrAXITLbP-ghcEzMJaxuE_Vb"}];


router.get('/', function(req, res, next) {
	if(req.session.isLoggedIn == true){
		if(req.session.hasSubmitted && req.session.hasSubmitted == true){
			res.render('home', { title: 'submitted' });
		}
		else{
			res.render('home', { title: 'notSubmitted' });
		}
	}
	else{
		res.redirect('/');
	}
  
});


module.exports = router;

