let express = require('express');
let router = express.Router();
const { body } = require ('express-validator');
let productsController = require ("../controllers/productsController");
const multer = require("multer");
const path = require("path");
const productCreationValidation = require("../middlewares/productCreationValidation")


const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, path.resolve(__dirname, '../../public/images/products'))
    },
    filename: function(req,file,cb){
        cb(null, "image-" + Date.now() + path.extname(file.originalname))
    }
});

 const upload = multer({storage: storage});


/*middleware*/
 const authProductMiddleware = require ('../middlewares/authProductMiddleware');

 router.get("/", authProductMiddleware, productsController.product);
 router.get("/search", productsController.search);
 router.post("/", upload.single("productImage"), productCreationValidation, productsController.store);
 router.get("/detail/:idProduct", productsController.detail);
 router.get("/cart", productsController.cart);
 router.get("/edit/:idProduct", productsController.edit);
 router.put("/edit/:idProduct", upload.single("productImage"), productCreationValidation, productsController.update); 
 router.get("/create", productsController.create); 
 router.delete("/edit/delete/:idProduct", productsController.delete); 
 
 router.get("/catalogue", productsController.catalogue);

/*Procesamiento de datos*/


module.exports = router;