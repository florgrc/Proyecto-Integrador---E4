let db = require("../db/models");

module.exports = function loggedUserMiddleware(req, res, next) {
    //Se puede hacer un "async" adelante de la "function" directamente sin tener que usar la linea 8 y 27
    //res.locals.loggedSession = false;

    (async function() {

        if (req.session.loggedUser == undefined && (req.cookies != undefined && req.cookies.userEmail != undefined)) {
            res.locals.isLogged = true;

            req.session.loggedUser =  await db.Users.findOne({
                where: {
                    email: req.cookies.userEmail
                }
            })

            /*res.locals.loggedUser = await db.Users.findOne({
                where: {
                    email: req.cookies.email
                }
            })*/ 
            //ESTO SE SOLUCIONA LUEGO EN EL OTRO IF...SOLO TENIA QUE ASIGNAR LA SESSION CON EL USUARIO DE LA COOKIE
        }
          

        if (req.session.loggedUser) {

            res.locals.isLogged = true;
            res.locals.loggedUser = req.session.loggedUser
        }

        next()
    })()
}
 
