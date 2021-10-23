let express = require('express');
let router = express.Router();
let productsController = require ("../controllers/productsController");
 
router.get("/detail/:idProduct", productsController.detail);
router.get("/cart", productsController.cart);
router.get("/edit", productsController.edit);
 router.get("/edit/:idProduct", productsController.edit); 
router.put("/edit/:idProduct", function (req,res) {
    res.send("fui por PUT");
});
router.get("/create", productsController.create);

/*Procesamiento de datos*/


module.exports = router;