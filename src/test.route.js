var express = require('express');
var router = express.Router();

const astrologer = require('../src/modules/astrologer/routes/astrologer.route');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('welcome');
});

router.use('/astrologer',astrologer);

module.exports = router;