const path = require("path");
const fs = require("fs");
const res = require('express/lib/response');
const db = require("../db/models");
const { validationResult } = require ('express-validator');
const { body } = require ('express-validator');

const productsController = {
    detail: (req, res) => {

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

        res.render("products/productDetail", {
            productSelected,
            others
        });

    },
    cart: (req, res) => {
        res.render("products/productCart")
    },

    edit: (req, res) => {
        /* fix para funcion de edicion de producto buscando por idProduct en lugar de posicion en el array */

        let idProductToEdit = db.ProductID.findByPk(req.params.id)
        let descripcion =db.Description.findAll()
        let image =db.ProductImage.findAll()
        let clasificacion =db.Classification.findAll()
        let variedad =db.Variety.findAll()
        let precio =db.Price.findAll()
        let destacado =db.Featured.findAll()
        Promise.all([idProductToEdit,descripcion,image,clasificacion, variedad, precio, destacado])
            .then(function([products,descripcion,image,clasificacion, variedad, precio, destacado]){
               return res.render('products/productEdit',{descripcion,image,clasificacion,variedad,precio,destacado});
               
            }).catch(error => console.log(error));
    },

    update: (req, res) => {
        let idProduct = req.params.idProduct
        db.Product.update({
            name:req.body.name,
            description:req.body.description,
            classification: req.body.classification,
            variety:req.body.variety,
            price:req.body.price,
            featured:req.body.featured,
            img:req.file.filename,
            }, 
            {
               where: {id: idProduct}
            })
            .then(function(productocreado){
                db.ProductName.update({
                    name_id:req.body.name,
                  },
                {
                    where: {product_id: idProduct}
            })
                db.ProductDescription.update({
                    description_id:req.body.description,
                },
            {
                where: {product_id: idProduct}
            })
            db.ProductClassification.update({
                classification_id:req.body.classification,
        },
        {
            where: {
                product_id: idProduct}
        })
        db.ProductVariety.update({
            variety_id:req.body.variety,
        }, 
        {
        where: {
            product_id: idProduct}
      })
       db.ProductPrice.update({
        price_id:req.body.price,
      }, 
      {
        where: {product_id: idProduct},
      })
       db.ProductFeatured.update({
         featured_id:req.body.featured,
       },
      {
        where: {
       product_id: idProduct},
      })
   db.ProductImage.update({
     image_id:req.file.filename,
   })   
   .catch(error => console.log(error));          
})
        
    res.redirect('/products');
},

    
delete: (req, res) => {
    db.Product.destroy({
        where: {id:req.params.id},
    })
    res.redirect("/products");

},
    create: (req, res) => {
        let nombre = db.Name.findAll()
        let descripcion =db.Description.findAll()
        let image =db.ProductImage.findAll()
        let clasificacion =db.Classification.findAll()
        let variedad =db.Variety.findAll()
        let precio =db.Price.findAll()
        let destacado =db.Featured.findAll()
        Promise.all([nombre,descripcion,image,clasificacion, variedad, precio, destacado])
            .then(function([nombre,descripcion,image,clasificacion, variedad, precio, destacado]){
               return res.render('products/productCreate',{Nombre:nombre,Descripcion: descripcion,Image:image,Clasificacion: clasificacion, Variedad: variedad, Precio: precio,Destacado: destacado});
               
            })
            .catch(error => console.log(error));          
     res.redirect('/products');
    },
       
    product: (req, res) => {
        res.render("products/product", {
            products
        })
    },
    catalogue: (req, res) => {
        res.render("products/productCatalogue", {
            products
        })
    },
    store: (req, res) => {
        let productImage = req.file.filename || "default-image1.png"
        
        let product = {
            idProduct: nuevoID(),
            ...req.body,
            image: productImage

        }
        products.push(product);

        let jsonDeProductos = JSON.stringify(products, null, 4);
        fs.writeFileSync(path.resolve(__dirname, "../db/products.json"), jsonDeProductos);

        res.redirect("/products");

    }
}

module.exports = productsController;