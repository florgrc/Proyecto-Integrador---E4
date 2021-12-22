const path = require('path');
const fs = require('fs');
const res = require('express/lib/response');
const bcrypt = require('bcryptjs');
const db = require("../db/models")

const newId = () => {
    let ultimo = 0;
    users.forEach(user => {
        if (user.id > ultimo) {
            ultimo = user.id;
        }
    });
    return ultimo + 1;
}


/* Ver usersController.update*/
function findUserID(idSearch) {
    var index = -1;
    console.log ("idSearch está Buscando id del user: " + idSearch);
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == idSearch) {
            index = i;
            console.log ("Buscando id del user: " + users[i]);
            break;
        }
    }
    return index;
}

const usersController = {


    register: (req, res) => {
        res.render('users/register');
    },

    store: (req, res) => {

        let userAvatar = req.file.filename || "default-image1.png"

        let newUser = {
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 8),
            image: userAvatar,
            /*admin: false,*/

        }
        db.Users.create(newUser)
        .then(usuario =>{
            return res.redirect("/users/login")
        })
        
       
    },


    login: (req, res) => {
        res.render("users/usersLogin");
    },

    loginProccess: (req, res) => {
      db.Users.findOne({
            where : {
                email: req.body.email}
            }).then((usuario) => {
                console.log(usuario)
                if (usuario) {
                    console.log(req.body.password)
                    let passwordOk = true /*bcrypt.compareSync(req.body.password, usuario.password)*/
                    console.log(passwordOk)
                    if (passwordOk) {
                        delete usuario.password;
                        req.session.usuario = usuario;
                        
                        if(req.body.remember_user) {
                            res.cookie("email", req.body.email, {maxAge : (1000 * 60) * 2})
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
        res.render('users/userEdit')
    },
    update: (req, res) => {
        console.log("check 1");
        let userToUpdate = findUserID(req.params.id);
        console.log("check 2: ----" + users[userToUpdate].id); // user[userToUpdate].id es la linea a solucionar
        users.forEach(user => {
            if (users[userToUpdate].id == req.params.id) {
                console.log("check 3: ----" + userToUpdate); // solucionar diferencia entre check 2 y check3
                users[userToUpdate].name = req.body.name;/*
                user[userToUpdate].description = req.body.description;
                user[userToUpdate].classification = req.body.classification;
                user[userToUpdate].variety = req.body.variety;
                user[userToUpdate].price = req.body.price;
                user[userToUpdate].featured = req.body.featured; */
                users[userToUpdate].image = req.file.filename;
            }
        })
        console.log("Se actualizó el user" + user[userToUpdate].id);

    },

    logout: (req,res) => {
        req.session.destroy();
        return res.redirect("/");
    }
}
module.exports = usersController