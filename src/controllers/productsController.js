const path = require("path");
const fs = require("fs");
const {
    dir
} = require("console");

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
                //product.image = req.file.filename;
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
        let nuevoId = () => {
            let ultimo = 0
            products.forEach(product => {
                if (product.idProduct > ultimo) {
                    ultimo = product.idProduct;
                }
            })

            return ultimo + 1;
        }

        let newID = nuevoId()
        res.render('products/productCreate', {
            newID
        })
    },

    product: (req, res) => {
        res.render("products/product", {
            products
        })
    },
    store: (req, res) => {

        let product = {
            idProduct: nuevoId(),
            ...req.body,
            image: req.body.image

        }
        products.push(product);

        let jsonDeProductos = JSON.stringify(products, null, 4);
        fs.writeFileSync(path.resolve(__dirname, "../db/products.json"), jsonDeProductos);

        res.redirect("/products");

    }


};

module.exports = productsController;