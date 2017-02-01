/**
 * Created by Harshit Sharma on 01-Feb-2017.
 */
// express setup
let express = require('express');
let router = express.Router();

/* GET books main page */
router.get('/', function (req, res, next) {
    res.render('books/index')
});

// make this file public
module.exports = router;
