const path = require("path");
const fs = require("fs");
const res = require('express/lib/response');
const db = require("../db/models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {
    validationResult
} = require('express-validator');
const {
    body
} = require('express-validator');

const productsController = {
    detail: (req, res) => {

        db.Products.findOne({
            where: {
                id: req.params.idProduct
            }
        }).then((producto) => {
            res.render("products/productDetail", {
                producto
            });
        })
    },
    cart: (req, res) => {
        res.render("products/productCart")
    },

    edit: (req, res) => {
        db.Products.findOne({
            where: {
                id: req.params.idProduct
            }
        }).then((producto) => {
            res.render("products/productEdit", {
                producto
            });
        })
    },


    update: (req, res) => {
        let productImage = req.file.filename || "default-image1.png"
        db.Products.update({
            name: req.body.name,
            description: req.body.description,
            image: productImage,
            classification_id: req.body.classification_id,
            variety_id: req.body.variety_id,
            price: req.body.price,
            featured: req.body.featured,
        }, {
            where: {
                id: req.params.idProduct
            }
        }).then((producto) => {
            res.redirect("/products");
        })
    },

    delete: (req, res) => {
        db.Products.destroy({
            where: {
                id: req.params.idProduct
            },
        })
        res.redirect("/products");

    },
    create: (req, res) => {
        res.render('products/productCreate');
    },

    product: (req, res) => {
        db.Products.findAll({
                include: {
                    all: true
                }
            })
            .then(function (products) {
                res.render("products/product", {
                    products
                })
            })
    },
    catalogue: (req, res) => {
        db.Products.findAll()
            .then(function (products) {
                res.render("products/productCatalogue", {
                    products
                })
            })
    },
    search: (req, res) => {
        let {
            term
        } = req.query;
        let {
            termPmin
        } = req.query;
        let {
            termPmax
        } = req.query;
        term = term.toLowerCase();
        console.log(term);
        console.log(termPmin);
        console.log(termPmax);
        if (termPmax == '') {
            db.Products.findAll({
                    where: {
                        price: {
                            [db.Sequelize.Op.gt]: [termPmin]
                        }
                    },
                    order: [
                        ["price", "ASC"]
                    ],
                    limit: 8,
                })
                .then(products => res.render('./products/productCatalogue', {
                    products
                }))
                .catch(error => console.log(error));
        } else if (termPmin == '') {
            db.Products.findAll({
                    where: {
                        price: {
                            [db.Sequelize.Op.lte]: [termPmax]
                        }
                    },
                    order: [
                        ["price", "DESC"]
                    ],
                    limit: 8,
                })
                .then(products => res.render('./products/productCatalogue', {
                    products
                }))
                .catch(error => console.log(error));
        } else {
            db.Products.findAll({
                    where: {
                        [db.Sequelize.Op.and]: [{
                                [db.Sequelize.Op.or]: [{
                                        name: {
                                            [db.Sequelize.Op.like]: '%' + term + '%'
                                        }
                                    },
                                    {
                                        description: {
                                            [db.Sequelize.Op.like]: '%' + term + '%'
                                        }
                                    },
                                ]
                            },
                            {
                                price: {
                                    [db.Sequelize.Op.between]: [termPmin, termPmax]
                                }
                            }, // No funciona bien el operador between
                        ]
                    },
                    order: [
                        ["price", "DESC"]
                    ],
                    limit: 8,
                })
                .then(products => res.render('./products/productCatalogue', {
                    products
                }))
                .catch(error => console.log(error));
        }
    },
    filtroPrecio: (req, res) => {
        let {
            term
        } = req.query;
        term = term.toLowerCase();
        console.log(term);
        db.Products.findAll({
                where: {
                    price: {
                        [Op.lte]: term
                    }
                },
            })
            .then(products => res.render('./products/productCatalogue', {
                products
            }))
            .catch(error => console.log(error));
    },
    store: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let productImage = req.file.filename || "default-image1.png"
            db.Products.create({
                name: req.body.name,
                description: req.body.description,
                image: productImage,
                classification_id: req.body.classification_id,
                variety_id: req.body.variety_id,
                price: req.body.price,
                featured: req.body.featured,
            }, ).then((producto) => {
                res.redirect("/products");
            })
        } else {
            res.render('products/productCreate', {
                errors: errors.array()
            })
        }
    }
}

module.exports = productsController;