const path = require('path');
const fs = require('fs');
const res = require('express/lib/response');
const bcrypt = require('bcryptjs');
const User = require("../models/users")

const { validationResult } = require ('express-validator');
const { body } = require ('express-validator');


const { stringify } = require('querystring');


const jsonUsers = fs.readFileSync(path.resolve(__dirname,'../db/users.json'), "utf-8");
const users = JSON.parse(jsonUsers); 


const newId = () => {
    let ultimo = 0;
    users.forEach(user => {
        if(user.id > ultimo) {
            ultimo = user.id;
        }
    });
    return ultimo + 1;
}

const usersController = { 
  
    
    register: (req, res) => {
        res.render('users/register');  
    },
 
    store: (req, res) =>{
       
        let userAvatar = req.file.filename || "default-image1.png"
       
        let newUser = {
            id: newId(),
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 8),
            image: userAvatar,

        }

        if(req.file){
            users.push(newUser);
            let jsonUsers = JSON.stringify(users, null, 4);
            fs.writeFileSync(path.resolve(__dirname, '../db/users.json'), jsonUsers);
            res.redirect('/');
        }else{
            res.render("users/register")
        }    
    },


    login : (req,res) => {
        res.render("users/usersLogin"); 
    },

    loginValidation : (req,res) => {
        
        let userToLogin = User.findByField("email", req.body.email);
        
        if (userToLogin){
            let passwordOk = bcrypt.compareSync(req.body.password, userToLogin.password)
            if (passwordOk){ 
                return res.redirect("/")
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
        
    }
}
    


    module.exports = usersController