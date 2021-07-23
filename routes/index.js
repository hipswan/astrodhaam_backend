var express = require('express');
const testRoute = require('../src/test.route');


var router = express.Router();

router.use('/',testRoute)

module.exports = router;
