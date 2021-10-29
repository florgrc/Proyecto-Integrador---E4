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
    editView: (req,res) => {
        res.render("products/productEdit")
   },
    edit: (req,res) => {
        

        let id = req.params.idProduct;
        /* res.send(id); */
        
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
        /* res.send(productToEdit); */ 
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
