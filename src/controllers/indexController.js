const path = require("path");
const fs = require("fs");
let db = require("../db/models");

/*Traer Productos*/

const indexController = {
    home: (req, res) => {
        let others = [];

        db.Products.findAll({
            include: {
                all: true
            },
            where: {
                featured: 1
            }
        }).then(featured => {
            res.render("index", {
                featured,
                others
            });
        })

    },
    about: (req, res) => {
        {
            res.render("indexAbout");
        }
    },
    contact: (req, res) => {
        {
            res.render("indexContact");
        }
    },
    error401: (req, res) => {
        {
            res.render("errors/401");
        }
    },
    error404: (req, res) => {
        {
            res.render("errors/404");
        }
    },
};

module.exports = indexController;