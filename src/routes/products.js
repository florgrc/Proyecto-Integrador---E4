let express = require('express');
let router = express.Router();
const { body } = require ('express-validator');
let productsController = require ("../controllers/productsController");
const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, path.resolve(__dirname, '../../public/images/vinos'))
    },
    filename: function(req,file,cb){
        cb(null, "image-" + Date.now() + path.extname(file.originalname))
    }
});

 const upload = multer({storage: storage});

router.get("/", productsController.product);
router.post("/", upload.single("productImage"), productsController.store);
router.get("/detail/:idProduct", productsController.detail);
router.get("/cart", productsController.cart);
router.get("/edit/:idProduct", productsController.edit);
router.put("/edit/:idProduct", productsController.update); 
router.get("/create", productsController.create);
router.delete("/edit/delete/:idProduct", productsController.delete);

/*Procesamiento de datos*/


module.exports = router;