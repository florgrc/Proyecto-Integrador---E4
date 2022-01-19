const  fetch = require('node-fetch');

const  db  = require ('../db/models');

module.exports = {
    index: (req,res) => {
        // return res.send ('Muestra Todos los recursos');
        db.Users.findAll()
            .then(users => {
                res.status(200).json({
                    status: 200,
                    count: users.length,
                    result: users,

                })
            }).catch(error => {
                res.status(501).json(error);
            })

    },
    indexMorty: (req,res) => {
        fetch ('https://rickandmortyapi.com/api/character/1')
            .then(response => response.json ())
            .then(character => res.send(character))
    },
    show: (req,res) => {
        //return res.send ('muestra un recurso');
        db.Users.findByPk(req.param.id)
            .then(users => {
                res.status(200).json({
                    status: 200,
                    result: users,

                })
            }).catch(error => {
                res.status(501).json(error);
            })
    },
    store: (req,res) => {
        // return res.send ('guarda un recurso');
        db.Users.create(req.body)
        .then(users => {
            res.status(200).json({
                status: 200,
                result: users,

            })
        }).catch(error => {
            res.status(501).json(error);
        })
    },
    update: (req,res) => {
        //return res.send ('actualiza un recurso');
        db.Users.update(req.param.id)
        .then(users => {
            res.status(200).json({
                status: 200,
                result: users,

            })
        }).catch(error => {
            res.status(501).json(error);
        })
    },
    delete: (req,res) => {
        return res.send ('borra un recurso');
        
        // FALTA PROBARLO
        /*db.Users.destroy(req.body)
        .then(users => {
            res.status(200).json({
                status: 200,
                result: users,

            })
        }).catch(error => {
            res.status(501).json(error);
        })*/ 
    },

}