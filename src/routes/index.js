const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.home);
router.get('/about', indexController.about);
router.get('/contact', indexController.contact);
router.get('/401', indexController.error401);
router.get('/404', indexController.error404);

module.exports = router;