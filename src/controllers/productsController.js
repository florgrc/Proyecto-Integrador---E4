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
    editView: (req,res) => {
        res.render("products/productEdit")
   },
    edit: (req,res) => {
        
       /* let loQueBuscoElUsuario = req.query;
        let id = req.params.idProduct;
        res.send(id); */
        
        let idProduct = req.params.idProduct -1;

        let product = 
        [
            {
                id: 1,
                name:'VinoDiana',
                detail: 'Malbec',
                class: 'Espumante',
                price: 1000,
                avatar: '',
           
             },
             {
                id: 2,
                name:'VinoFlor',
                detail: 'Cabernet',
                class: 'Tinto',
                price: 1500,
                avatar: '',
           
             },
             {
                id: 3,
                name:'VinoJuan',
                detail: 'Cabernet',
                class: 'Tinto',
                price: 1500,
                avatar: '',
           
             }

        ]
        
        let productToEdit = product[idProduct];
        /* res.send(productToEdit);*/
        res.render ("products/productEdit", {productToEdit: productToEdit}); 

   },
    update: (req,res) => {
        
     let product = {
        id: req.body.productId,
        name:req.body.productName,
        detail: req.body.productDetail,
        class: req.body.productClass,
        price: req.body.productPrice,
        avatar: req.body.avatar,
   
     }
          
   
     /*res.send(product);*/
     res.redirect('/products');
     /* res.send (req.body);*/
     /*res.render("/product", {product: product}); */

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
  
       res.render('products/product', {'product': idProduct})
        /* res.render("products/product") */
      },

};

module.exports = productsController;
