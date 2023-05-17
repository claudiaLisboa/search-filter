var express = require('express');
var router = express.Router();

router.get('/', function(request, response, next) {
    response.send('VAI CAGAR NO MATO - A API está funcionando corretamente');
});

module.exports = router;