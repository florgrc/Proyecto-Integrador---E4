const express = require('express');
const router = express.Router();
const controller = require('../controllers/apiController');


router.get('/users', controller.index);
router.get('/users/morty', controller.indexMorty);
router.get('/users/:id', controller.show);
router.post('/users', controller.store);
router.put('/users/:id', controller.update);
router.delete('/users/:id', controller.delete);

router.get('/products', controller.listProducts);
router.get('/products/:id', controller.productDetails);

module.exports = router;
