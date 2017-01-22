var express = require('express');
var router = express.Router();
var moment = require('moment');

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/:time', function(req, res) {
  const time = req.params.time;
  let ret = {};
  let date = {};
  let unix = '';
  let natural = '';
  console.log(Number(time));

  if (isNumeric(time)) {
    date = moment.utc(Number(time), 'X');
  } else {
    date = moment.utc(time, 'MMMM DD, YYYY');
  }

  unix = date.format('X');
  natural = date.format('MMMM DD, YYYY');
  ret = {
    "unix": unix,
    "natural": natural
  };
  res.json(ret);
});

module.exports = router;
