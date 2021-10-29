let express = require('express');
let router = express.Router();
let productsController = require ("../controllers/productsController");

router.get("/", productsController.product);
router.post("/", productsController.store);
router.get("/detail/:idProduct", productsController.detail);
router.get("/cart", productsController.cart);
router.get("/edit/:idProduct", productsController.edit);
router.put("/edit/:idProduct", productsController.update); 
router.get("/create", productsController.create);

/*Procesamiento de datos*/


module.exports = router;