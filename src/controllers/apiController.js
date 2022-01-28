const fetch = require('node-fetch');

const db = require('../db/models');

module.exports = {
    index: (req, res) => {
        // return res.send ('Muestra Todos los recursos');
        db.Users.findAll()
            .then(users => {
                res.status(200).json({
                    status: 200,
                    count: users.length,
                    result: users,

                })
            }).catch(error => {
                res.status(501).json(error);
            })

    },
    indexMorty: (req, res) => {
        fetch('https://rickandmortyapi.com/api/character/1')
            .then(response => response.json())
            .then(character => res.send(character))
    },
    show: (req, res) => {
        //return res.send ('muestra un recurso');
        db.Users.findByPk(req.param.id)
            .then(users => {
                res.status(200).json({
                    status: 200,
                    result: users,

                })
            }).catch(error => {
                res.status(501).json(error);
            })
    },
    store: (req, res) => {
        // return res.send ('guarda un recurso');
        db.Users.create(req.body)
            .then(users => {
                res.status(200).json({
                    status: 200,
                    result: users,

                })
            }).catch(error => {
                res.status(501).json(error);
            })
    },
    update: (req, res) => {
        //return res.send ('actualiza un recurso');
        db.Users.update(req.param.id)
            .then(users => {
                res.status(200).json({
                    status: 200,
                    result: users,

                })
            }).catch(error => {
                res.status(501).json(error);
            })
    },
    delete: (req, res) => {
        return res.send('borra un recurso');

        // FALTA PROBARLO
        /*db.Users.destroy(req.body)
        .then(users => {
            res.status(200).json({
                status: 200,
                result: users,

            })
        }).catch(error => {
            res.status(501).json(error);
        })*/
    },
    // SECCION API DE PRODUCTOS
    listProducts: (req, res) => {
        let products = db.Products.findAll({
            include: {
                all: true
            }
        })
        let varieties = db.Varieties.findAll({
            include: {
                all: true
            }
        })
        Promise.all([products, varieties])
            .then(function ([products, varieties]) {
                let productList = []
                products.forEach(product => {
                    productList.push({
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        //image: "http://localhost:3000/images/products/" + product.image,
                        //class_id: product.classification_id,
                        variety_id: product.variety_id,
                        //price: product.price,
                        //featured: product.featured,
                        detail: "http://localhost:3000/products/detail/" + product.id,
                    })
                })
                let countByVariety = []
                let productsByVariety = {}
                varieties.forEach(variety => {
                    let count = 0;
                    products.forEach(productVariety => {
                        if (productVariety.variety_id == variety.id) {
                            count++
                        }
                    });
                    productsByVariety[variety.name] = count
                    countByVariety.push({
                        variety: variety.name,
                        id: variety.id,
                        count: count,
                    })
                })
                return res.status(200).json({
                    productCount: products.length,
                    productCountByVariety: countByVariety,
                    products: productList,
                    status: 200
                })
            })
    },
    productDetails: (req, res) => {
        db.Products.findByPk(req.params.id, {
                include: {
                    all: true
                }
            })
            .then(product => {
                return res.status(200).json({
                    productID: product.id,
                    productName: product.name,
                    description: product.description,
                    image: "http://localhost:3000/images/products/" + product.image,
                    classification: [product.classification_id],
                    variety: [product.variety_id],
                    price: product.price,
                    featured: product.featured,
                    status: 200
                })
            })
    },
    productDetails: (req, res) => {
        /* findOne
            limit 1
            order Desc */
        db.Products.findByPk(req.params.id, {
                include: {
                    all: true
                }
            })
            .then(product => {
                return res.status(200).json({
                    productID: product.id,
                    productName: product.name,
                    description: product.description,
                    image: "http://localhost:3000/images/products/" + product.image,
                    classification: [product.classification_id],
                    variety: [product.variety_id],
                    price: product.price,
                    featured: product.featured,
                    status: 200
                })
            })
    }
}