
const db = require("../db/models");

const {
    check
  } = require('express-validator');
  const usersRegisterValidation = [
    check('firstname')
    .notEmpty().withMessage('Debes completar tu nombre').bail()
    .isLength({
      min: 2
    }).withMessage('El nombre debe tener al menos 2 caracteres'),
    check('lastname')
    .notEmpty().withMessage('Debes completar tu apellido').bail()
    .isLength({
      min: 2
    }).withMessage('El apellido debe tener al menos 2 caracteres'),
    check('email')
    .notEmpty().withMessage('Debes ingresar tu mail').bail()
    .isEmail().withMessage('Debes ingresar una direccion de email válida')
    
    .custom(value => {
      return  db.Users.findOne({ 
        where : {
          email: value} })
          .then(user => {
        if (user) {
          return Promise.reject('El email ya esta en uso');
        }
      });
    }),
    check('password')
    .notEmpty().withMessage('Debes ingresar una contraseña').bail()
    .isLength({
      min: 8
    }).withMessage('La contraseña debe tener al menos 8 caracteres'),
    check('repassword').notEmpty().withMessage('Debes repetir la contraseña').bail()
    .custom((repass, { req }) => {
      if (repass !== req.body.password) {
        throw new Error('Las contraseñas deben coincidir');
      }
      return true;
    }).bail()
  ]
  module.exports = usersRegisterValidation;