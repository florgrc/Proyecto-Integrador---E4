const { cache } = require('ejs');
let express = require('express');

let router = express.Router();

let editarProductoController = require ("../controllers/editarProductoController");
/* 
router.get('/', function(req, res, next) {
    res.render('editarProductoController', { title: 'Ejemplo de Mati'});
  });
*/
 
router.get("/detalle", editarProductoController.detalle);

module.exports = router;