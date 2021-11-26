const path = require("path");
const fs = require("fs");
const res = require('express/lib/response');

const { validationResult } = require ('express-validator');
const { body } = require ('express-validator');

/*Traer Productos*/

let jsonProducts = fs.readFileSync(path.resolve(__dirname, "../db/products.json"), "utf-8");
let products = JSON.parse(jsonProducts);

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
        // req.file.filename

        let jsonDeProductos = JSON.stringify(products, null, 4);
        fs.writeFileSync(path.resolve(__dirname, "../db/products.json"), jsonDeProductos);

        res.redirect("/products");
    },

    delete: (req, res) => {

        let productToDelete = findProductID(req.params.idProduct);

        products.splice(productToDelete, 1);

        let productsJson = JSON.stringify(products, null, 4);
        fs.writeFileSync(path.resolve(__dirname, "../db/products.json"), productsJson);

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
    store: (req, res) => {
        console.log("REQFILE" + req.file)
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


};

module.exports = productsController;