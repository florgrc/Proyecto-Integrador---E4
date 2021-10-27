let express = require('express');
let router = express.Router();
let productsController = require ("../controllers/productsController");

router.get("/product", productsController.product);
router.get("/detail/:idProduct", productsController.detail);
router.get("/cart", productsController.cart);
router.get("/edit", productsController.edit);
router.get("/edit/:idProduct", productsController.edit);
router.put("/edit/:idProduct", productsController.update); 
router.get("/create", productsController.create);
router.get('/', productsController.product);

/*Procesamiento de datos*/


module.exports = router;