const path = require("path");
const fs = require("fs");

/*Traer Productos*/

let jsonProducts = fs.readFileSync(path.resolve(__dirname,"../db/products.json"),"utf-8");
let products = JSON.parse(jsonProducts);


const indexController = {
    home: (req,res) => {
        let others = [];
        let featured = [];

        products.forEach(product => {
            if (product.featured == true) {
                featured.push(product);
            } else {
                others.push(product)
            }
        });
         res.render("index" , {featured,others});
    },
};

module.exports = indexController;
