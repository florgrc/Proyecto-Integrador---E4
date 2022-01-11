const {
    check
} = require('express-validator');
const productCreationValidation = [
    check('name').notEmpty().withMessage('Debes indicar el nombre del producto.').bail().isString().withMessage('El nombre del producto solo puede contener letras y numeros.').bail(),
    
    check('description').notEmpty().withMessage('No puede estar vacio').bail().isLength({
        min: 20,
        max: 100
    }).withMessage('La descripcion debe tener un minimo de 20 caracteres y un maximo de 100.').bail(),
    check('classification_id').isNumeric().withMessage('Debe ser un campo numerico').bail(),
    check('variety_id').isNumeric().withMessage('Debe ser un campo numerico').bail(),
    check('price').notEmpty().withMessage('Debes indicar el precio del producto.').bail().isNumeric().withMessage('El precio del producto solo puede contener numeros.').bail(),
]
module.exports = productCreationValidation;