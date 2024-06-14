var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('respond')
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  console.log('cool block')
  res.send('you/re so cool');
});

module.exports = router;
