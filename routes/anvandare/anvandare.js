var express = require('express');
var router = express.Router();

/* GET home page. */
router.use(require('./minprofil'));
router.use(require('./minabokningar'));

module.exports = router;
