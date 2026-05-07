var express = require('express');
var router = express.Router();

const fortunes = require('../data/data.json');

/* GET home page. */
router.get('/', function(req, res, next) {

  // generate random number
  const randomIndex = Math.floor(Math.random() * fortunes.length);

  // select random fortune
  const randomFortune = fortunes[randomIndex];

  // render page
  res.render('index', {
    title: 'Fortune Cookie Generator',
    fortune: randomFortune.fortune
  });

});

module.exports = router;