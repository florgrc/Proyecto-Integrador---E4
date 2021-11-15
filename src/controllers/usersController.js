const { validationResult } = require ('express-validator');
// const { body } = require ('express-validator');
const path = require("path");
const fs = require("fs");
const bcrypt = require('bcryptjs');

const { stringify } = require('querystring');


const jsonUsers = fs.readFileSync(path.resolve(__dirname,"../db/users.json"),"utf-8");
const users = JSON.parse(jsonUsers);


const newUserId = () => {
    let ultimo = 0;
    users.forEach(user => {
        if(user.id > ultimo) {
            ultimo = user.id;
        }
    });
    return ultimo +1;
};
const usersController = {
    home: (req, res) => {
        res.render("users");
    },
    register: (req,res) => {
        
         res.render("users/register")},
    
     create: (req,res) => {
         let userAvatar = req.file.filename || "default-image1.png"
         let newUserId =  {
             id: newUserId (),
             ...req.body,
             password: bcrypt.hashSync(req.body.password),
             image: userAvatar
         }
         console.log(req.file);
         if(req.file){
             users.push(newUserId);
             letjsonUsers = JSON.stringify(users, null, 4);
             fs.writeFileSync(path.resolve(__dirname, '../db/users.json', jsonUsers)),
             res.redirect('/');
         }
         else {
             res.render("users/register")
         }
         
     },

     

     login: (req,res) => {
        res.cookie("testing", "Hola MUNDO", {maxAge : 1000 *30})
        res.render("users/usersLogin"); 

    },
    loginValidation: (req,res) => {
        
        // let users = usersModel.all();


        let errors = validationResult (req);
        
        if (errors.isEmpty ()) {
            let user = req.body();
            userId = 001;
            //userId = usersModel.create(user);
            /* Aca comienza REMEMBER USER */
            if(req.body.remember_user) {
                res.cookie("userEmail", req.body.email, {maxAge : (1000 * 60) * 2})
            }
            /* Aca termina REMEMBER USER */
            res.redirect('/users/'+ userId )         
            // res.send('todo ok: ' + stringify(req.body));

        } else {
            res.send(errors);
   
        }


    }

};

module.exports = usersController;
