const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');


router.get('/', indexController.home);
/*router.get('/pruebaSession', function(req, res){
    if (req.session.numeroVisitas == undefined){
        req.session.numeroVisitas = 0;
    }
    req.session.numeroVisitas++;
    res.send('session tiene el numero ' + req.session.numeroVisitas);
});
*/
module.exports = router;


