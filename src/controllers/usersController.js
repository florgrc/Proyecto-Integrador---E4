const { validationResult } = require ('express-validator');
// const { body } = require ('express-validator');
const path = require("path");
const fs = require("fs");
const { stringify } = require('querystring');


let jsonUsers = fs.readFileSync(path.resolve(__dirname,"../db/users.json"),"utf-8");
let users = JSON.parse(jsonUsers);



const usersController = {
     register: (req,res) => {
         res.cookie("testing", "Hola MUNDO", {maxAge : 100 *30})
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
        res.render("users/usersLogin"); 

    },
    loginValidation: (req,res) => {
        
        // let users = usersModel.all();


        let errors = validationResult (req);
        
        if (errors.isEmpty ()) {
            let user = req.body();
            userId = 001;
            //userId = usersModel.create(user);
            res.redirect('/users/'+ userId )         
            // res.send('todo ok: ' + stringify(req.body));

        } else {
            res.send(errors);
   
        }


    }

};

module.exports = usersController;
