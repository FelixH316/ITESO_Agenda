const { response } = require("express");
const contacto = require("./../models/contacto");

module.exports = {
    listar: (req, res) => {
        contacto.find({status: 1})
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(400).send("algo salio mal"); // BAD REQUEST
            });
    },
    ver: (req, res) => {
        const id = req.params.id;
        const erase = req.query.erase;
        contacto.findOne({status: 1, _id: id})
            .then(data => {
                if(erase == "true")
                {
                    data.status = 2;
                    data.save();
                    res.send("Se elimino correctamente a " + data.nombre);
                }
                else
                {
                    res.send(data);
                }
            })
            .catch(err => {
                res.status(400).send("No se encontro el id"); // BAD REQUEST
            });
    },
    crear: (req, res) => {
        const data = req.body;
        contacto.create(data).then(response => {
            res.send(response);
        });
    }
} 

// find, findOne, findById, create, save

// SELECT * from contactos WHERE status = 1 AND _id = id LIMIT 1