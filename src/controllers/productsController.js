const path = require("path");
const fs = require("fs");

/*Traer Productos*/

let jsonProducts = fs.readFileSync(path.resolve(__dirname,"../db/products.json"),"utf-8");
let products = JSON.parse(jsonProducts);


const nuevoId = () => {
    let ultimo = 0
    products.forEach(product => {
        if (product.id > ultimo) {
            ultimo = product.id;    
        }
    })

    return ultimo +1;
}

const productsController = {
    detail: (req,res) => {

        let productSelected = [];
        let others = [];
        let id = req.params.idProduct

        products.forEach(product => {
            if (id == product.idProduct) {
                productSelected.push(product);
            } else {
                others.push(product)
            }
        });
        
         res.render("products/productDetail" , {productSelected,others});

   },
    cart: (req,res) => {
         res.render("products/productCart")
    },

    edit: (req,res) => {
                
        let idProduct = req.params.idProduct -1;
        let productToEdit = products[idProduct];
        /* res.send(productToEdit); */ 
        res.render ("products/productEdit", {productToEdit: productToEdit}); 

   },
    update: (req,res) => {

    
   /*  let idProduct = req.params.idProduct -1;

    let productUpdate = req.body; */     
   
    /* let productUpdate = [
        
            "idProduct": req.params -1,
            "name": "Sauce - Hoisin",
            "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
            "classification": "lectus suspendisse potenti in eleifend",
            "variety": "Malbec",
            "price": "$21203.00",
            "featured": true,
            "image": "/images/vinos/vino1.jpg"
        
    ]; */
    let productUpdate = {
        "idProduct": req.params.idProduct -1,
        "name":req.body.productName,
        "description": req.body.productDetail,
        "classification": req.body.productClass,
        "variety": req.body.productVariety, 
        "price": req.body.productPrice,
        "featured": true,
        "image": "/images/vinos/vino1.jpg",
   
     };
     products [productUpdate.idProduct] = productUpdate;       
     /* res.send('va por put'); */
     /* res.redirect('/products'); */
     /* products [productUpdate.idProduct];*/
     res.send ('va por put ' + products [0]); // Trabajar sobre esta linea y Trabjar sobre el JSON de products.json
     /*res.render("/product", {product: productUpdate}); */

   },
    create: (req,res) => {

       res.render('products/productCreate')
        /* res.render("products/product") */
      },
   product: (req, res) => {
    res.render("products/product", {products})
  },
  store: (req,res) => {

    let product = {
        idProduct: nuevoId(),
        ...req.body,
        image: req.body.image

    }
      products.push(product);

      let jsonDeProductos = JSON.stringify(products, null, 4);
      fs.writeFileSync(path.resolve(__dirname,"../db/products.json"),jsonDeProductos);

      res.redirect("/products");
  }


};

module.exports = productsController;
