const path = require('path');
const fs = require('fs');
const res = require('express/lib/response');
const bcrypt = require('bcryptjs');
const db = require("../db/models");
const {
    validationResult
} = require("express-validator");

const newId = () => {
    let ultimo = 0;
    users.forEach(user => {
        if (user.id > ultimo) {
            ultimo = user.id;
        }
    });
    return ultimo + 1;
}

const usersController = {
    register: (req, res) => {
        res.render('users/register');
    },
    list: (req, res) => {
        db.Users.findAll({
                include: {
                    all: true
                }
            })
            .then(users => {
                //return res.send(users);
                return res.render("users/usersCatalogue", {
                    users
                });
            }).catch(error => {
                return res.send(error)
            })
    },

    store: (req, res) => {

        let errors = validationResult(req)

        let userAvatar = req.file.filename || "default-image1.png"

        let newUser = {
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 8),
            image: userAvatar,
            /*admin: false*/

        }
        if (errors.isEmpty()) {
            db.Users.create(newUser)
                .then(usuario => {
                    return res.redirect("/users/login")
                })
        } else {
            res.render("users/register", {
                errors: errors.array()
            })
        }

    },
    login: (req, res) => {
        res.render("users/usersLogin");
    },
    loginProccess: (req, res) => {
        db.Users.findOne({
            where: {
                email: req.body.email
            }
        }).then((usuario) => {
            if (usuario) {
                let passwordOk = bcrypt.compareSync(req.body.password, usuario.password);
                if (passwordOk) {
                    delete usuario.password;
                    req.session.loggedUser = usuario;

                    if (req.body.remember_user) {
                        res.cookie("email", req.body.email, {
                            maxAge: (1000 * 60) * 2
                        })
                    }

                    return res.redirect("/users/profile")
                }
                return res.render("users/usersLogin", {
                    errors: {
                        email: {
                            msg: "La contraseña es incorrecta"
                        }
                    }
                })

            }
            return res.render("users/usersLogin", {
                errors: {
                    email: {
                        msg: "Las credenciales son invalidas"
                    }
                }
            })
        }).catch(e => {
            res.send(e)
        })
    },
    profile: (req, res) => {
        res.render('users/userProfile')
    },
    edit: (req, res) => {
        db.Users.findOne({
            where: {
                id: req.params.id
            }
        }).then((user) => {
            res.render('users/userEdit', {
                user
            });
        })
    },
    update: (req, res) => {
        db.Users.update({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            image: req.file.filename,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
        }, {
            where: {
                id: req.params.id
            }
        }).then((usuario) => {
            res.redirect("/users/profile");
        })
    },
    delete: (req, res) => {
        db.Users.destroy({
            where: {
                id: req.params.id
            },
        })
        res.redirect("/users");

    },
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect("/");
    }
}
module.exports = usersController