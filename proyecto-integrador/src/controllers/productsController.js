const productsController = {
    detail: (req,res) => {
        res.render("products/productDetail")
   },
    cart: (req,res) => {
         res.render("products/productCart")
    },
    edit: (req,res) => {
        res.render("products/productEdit")
   },
    create: (req,res) => {
        res.render("products/createProduct")
   },
};

module.exports = productsController;
