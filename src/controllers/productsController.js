const path = require("path");
const fs = require("fs");
const res = require('express/lib/response');
let db = require("../db/models")

const { validationResult } = require ('express-validator');
const { body } = require ('express-validator');

/*Traer Productos*/

        /* Indexa la propiedad idProduct del objeto para hacer la eliminacion por ID de producto (no por posicion en el array) y devuelve ese valor */
function findProductID(idSearch) {
    var index = -1;
    for (var i = 0; i < products.length; i++) {
        if (products[i].idProduct == idSearch) {
            index = i;
            break;
        }
    }
    return index;
}

function nuevoID() {
    let last = 0
    products.forEach(product => {
        if (product.idProduct > last) {
            last = product.idProduct;
        }
    })

    return last + 1;
}


const productsController = {
    detail: (req, res) => {

        db.Products.findOne({
            where : {
                id: req.params.idProduct}
            }).then((producto) => {
        res.render("products/productDetail", {
            producto
            });
        })}
            ,
    cart: (req, res) => {
        res.render("products/productCart")
    },

    edit: (req, res) => {
        /* fix para funcion de edicion de producto buscando por idProduct en lugar de posicion en el array */

        let idProductToEdit = findProductID(req.params.idProduct);

        let productToEdit = products[idProductToEdit];

        res.render("products/productEdit", {
            productToEdit: productToEdit
        });
    },
    update: (req, res) => {

        let productToUpdate = findProductID(req.params.idProduct);
        products.forEach(product => {
            if (products[productToUpdate].idProduct == req.params.idProduct) {
                products[productToUpdate].name = req.body.name;
                products[productToUpdate].description = req.body.description;
                products[productToUpdate].classification = req.body.classification;
                products[productToUpdate].variety = req.body.variety;
                products[productToUpdate].price = req.body.price;
                products[productToUpdate].featured = req.body.featured;
                products[productToUpdate].image = req.file.filename;
            }
        })
        res.redirect("/products");
    },

    delete: (req, res) => {
        let productToDelete = findProductID(req.params.idProduct);

        db.Products.destroy({
            where: {
                id: req.params.idProduct
            }
        })
        
        res.redirect("/products");

    },
    create: (req, res) => {
       
        let newProductID = nuevoID()
        res.render('products/productCreate', {
            newProductID
        })
    },

    product: (req, res) => {
        res.render("products/product", {
            products
        })
    },
    catalogue: (req, res) => {
        db.Products.findAll()
            .then(function(products){
                res.render("products/productCatalogue", {
                    products
                })
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

        res.redirect("/products");

    }


};

module.exports = productsController;