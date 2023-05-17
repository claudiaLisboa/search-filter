
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(request, response, next) {
  response.send('VAI CAGAR NO MATO - respond with a resource');
  // response.json(Users2);
});

module.exports = router;
