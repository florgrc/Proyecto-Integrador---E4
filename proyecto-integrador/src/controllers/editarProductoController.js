let editarProductoController = {
    nombreProducto: function(req, res, next) {
        res.render('index', { title: 'Ejemplo de Mati'});
      },
      descripcion: function(req, res, next) {
        res.render('index', { title: 'Ejemplo de Mati'});
      },
      imagen: function(req, res, next) {
        res.render('index', { title: 'Ejemplo de Mati'});
      },
      categoria: function(req, res, next) {
        res.render('index', { title: 'Ejemplo de Mati'});
      },
      colores: function(req, res, next) {
        res.render('index', { title: 'Ejemplo de Mati'});
      },
      precio: function(req, res, next) {
        res.render('index', { title: 'Ejemplo de Mati'});
      },
    crear: function () {},
    detalle: function (req,res) {
        res.send ("Bienvenidos al detalle de producto" )
    },

};

module.exports = editarProductoController;  