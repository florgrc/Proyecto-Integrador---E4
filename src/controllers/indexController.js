const path = require("path");
const fs = require("fs");

/*Traer Productos*/

const indexController = {
    home: (req,res) => {
        let others = [];
        let featured = [];

        products.forEach(product => {
            if (product.featured == true) {
            } else {
            }
        });
         res.render("index" , {featured,others});
    },
};

module.exports = indexController;
