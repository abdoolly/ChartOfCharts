var express = require('express');
var router = express.Router();
var uses = require('../controllers/controller');

/* GET home page. */
// router.get('/', function (req, res, next) {
//     res.render('index', {title: 'Express'});
// });

router.get('/',uses('TestController@test'));

module.exports = router;
