const path = require("path");
const fs = require("fs");


let jsonUsers = fs.readFileSync(path.resolve(__dirname,"../db/users.json"),"utf-8");
let users = JSON.parse(jsonUsers);



const usersController = {
     register: (req,res) => {
         res.render("users/register")},
    
     create: (req,res) => {
         let usuario =  {
             nombre: req.body.nombre,
             apellido: req.body.apellido,
             date: req.body.date,
             password: req.body.password,
             repasword: req.body.repassword
         }
         res.redirect("users/list")
     },

     login: (req,res) => {
         res.render("users/login")
    }

};

module.exports = usersController;
