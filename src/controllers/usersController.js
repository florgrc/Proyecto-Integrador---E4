const path = require('path');
const fs = require('fs');
const res = require('express/lib/response');
const bcrypt = require('bcryptjs');
const User = require("../models/users")

const jsonUsers = fs.readFileSync(path.resolve(__dirname, '../db/users.json'), "utf-8");
const users = JSON.parse(jsonUsers);



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
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == idSearch) {
            index = i;
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
            id: newId(),
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 8),
            image: userAvatar,
            admin: false,

        }

        if (req.file) {
            users.push(newUser);
            let jsonUsers = JSON.stringify(users, null, 4);
            fs.writeFileSync(path.resolve(__dirname, '../db/users.json'), jsonUsers);
            req.session.loggedUser = newUser;
            res.redirect('/users/profile');
        } else {
            res.render("users/register")
        }
    },


    login: (req, res) => {
        res.render("users/usersLogin");
    },

    loginProccess: (req, res) => {
        let loggedUser = User.findByField("email", req.body.email);

        if (loggedUser) {
            let passwordOk = bcrypt.compareSync(req.body.password, loggedUser.password)
            if (passwordOk) {
                delete loggedUser.password;
                req.session.loggedUser = loggedUser;

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
    },

    
    /*res.cookie("testing", "Hola MUNDO", {maxAge : 1000 *30})*/


    /*let errors = validationResult (req);
    
    /*if (errors.isEmpty ()) {
        let user = req.body();
        userId = 001;
        //userId = usersModel.create(user);
*/
        
        /* Aca comienza REMEMBER USER */
    
        /* Aca termina REMEMBER USER */
       /* res.redirect('/users/'+ userId )         
        // res.send('todo ok: ' + stringify(req.body));

    /* } else {
        res.send(errors);

    }
    }
}
*/
    profile: (req, res) => {
        res.render('users/userProfile')
    },

    edit: (req, res) => {
        console.log ("entro a UsersController.edit ");
        res.render('users/userEdit')
    },
    update: (req, res) => {
        // let userToUpdate = req.session.id;
        let userToUpdate = findUserID(req.params.id);
        console.log ("entro al userToUpdate:" + userToUpdate);
/*
        users.forEach(product => {
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

        let jsonDeProductos = JSON.stringify(products, null, 4);
        fs.writeFileSync(path.resolve(__dirname, "../db/users.json"), jsonDeProductos);


        let usetToUpdate = {
            id: newId(),
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 8),
            image: req.file.filename,
            admin: false,

        }

        if (req.file) {
            users.push(newUser);
            let jsonUsers = JSON.stringify(users, null, 4);
            fs.writeFileSync(path.resolve(__dirname, '../db/users.json'), jsonUsers);
            req.session.loggedUser = newUser;
            res.redirect('/users/profile');
        } else {
            res.render("users/userEdit")
        }
*/

    },

    logout: (req,res) => {
        req.session.destroy();
        return res.redirect("/");
    }
}
module.exports = usersController