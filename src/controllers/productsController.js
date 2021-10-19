const productsController = {
    detail: (req,res) => {
        res.render("products/productDetail")
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
        res.render("products/createProduct")
   },
};

module.exports = productsController;
