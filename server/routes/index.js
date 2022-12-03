//require modules for the routes
let express = require('express');
let router = express.Router();

//reference controller
let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

module.exports = router;
