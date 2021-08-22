var express = require('express');
var router = express.Router();

const astrologer = require('../src/modules/astrologer/routes/astrologer.route');
const review = require('../src/modules/review/routes/review.route');
const follow = require('../src/modules/follow/routes/follow.route');
const OTP = require('../src/modules/OTP/routes/OTP.route');





/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('welcome');
});

router.use('/astrologer',astrologer);
router.use('/review',review);
router.use('/follow',follow);
router.use('/OTP',OTP);




module.exports = router;