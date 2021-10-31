let express = require('express');
let router = express.Router();
let productsController = require ("../controllers/productsController");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/images/vinos"))
    },
    filename: (req, file, cb) => {
        const newFileName = "image-" + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
})

 const upload = multer({storage});

router.get("/", productsController.product);
router.post("/", upload.single("image"), productsController.store);
router.get("/detail/:idProduct", productsController.detail);
router.get("/cart", productsController.cart);
router.get("/edit/:idProduct", productsController.edit);
router.put("/edit/:idProduct", productsController.update); 
router.get("/create", productsController.create);

/*Procesamiento de datos*/


module.exports = router;