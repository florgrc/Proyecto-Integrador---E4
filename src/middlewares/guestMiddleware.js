function guestMiddleware(req,res,next) {
    console.log ("entro a guestMiddleware" + req.session.loggedUser);
    if(req.session.loggedUser == undefined) {
        next();
    }else{
        return res.redirect('/users/profile')
    }
}
module.exports = guestMiddleware;