const path = require("path");
const fs = require("fs");

/*Traer Productos*/

let jsonProducts = fs.readFileSync(path.resolve(__dirname,"../db/products.json"),"utf-8");
let products = JSON.parse(jsonProducts);

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
        
     let idProduct = req.params.idProduct;

     let product = [
          {id:1, name:"vinoDiana"},
          {id:2, name:"vinoFlor"},
          {id:3, name:"vinoJuan"},
          {id:4, name:"vinoMati"}
     ];
     
     let productToEdit = product[idProduct];
 
     res.render("products/productEdit", {productToEdit: productToEdit});

   },
    create: (req,res) => {
     
     let idProduct = [
          {id:1, name:"vinoDiana"},
          {id:2, name:"vinoFlor"},
          {id:3, name:"vinoJuan"},
          {id:4, name:"vinoMati"}
     ];

     res.render("products/productCreate")
   },
    product: (req, res) => {
     
        let idProduct = [
             {id:1, name:"vinoDiana"},
             {id:2, name:"vinoFlor"},
             {id:3, name:"vinoJuan"},
             {id:4, name:"vinoMati"}
        ];
   
        res.render("products/product")
      },

};

module.exports = productsController;
