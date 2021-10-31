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
        res.render ("products/productEdit", {productToEdit: productToEdit}); 

   },
    update: (req,res) => {

    let idProduct = req.params.idProduct;
    
    let product = {
        idProduct: idProduct,
        ...req.body,
        image: req.body.image}

        products.push(product);

          let jsonDeProductos = JSON.stringify(products, null, 4);
          fs.writeFileSync(path.resolve(__dirname,"../db/products.json"),jsonDeProductos);
    
          res.redirect("/products");
          /* FALTA HACER QUE SE APLIQUE LA MODIFICACION*/
    },
    create: (req,res) => {

       res.render('products/productCreate')
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

      console.log(product);
      res.redirect("/products");
      
  }


};

module.exports = productsController;
