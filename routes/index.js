var express = require('express');
var router = express.Router();
let toneAnalyzer = require('../helpers/toneAnalyzer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tone Checker' });
});

/* GET home page. */
router.post('/', function(req, res, next) {
  let message=  req.body.text;
  toneAnalyzer(message).then((result) => {
    console.log(result);
    res.json(result);
  }).catch(err => {
      console.log(err);
  });
  // res.render('index', { title: 'Express' });
});

module.exports = router;
