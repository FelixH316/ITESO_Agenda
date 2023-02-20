/*
    BRIEF:      Agenda controller
    AUTHOR:     Félix Armenta Aguiñaga
    DATE:       2022-12-12
    VERSION:    0.0.1
*/

const { response } = require("express");
const contacto = require("./../models/contacto");

module.exports = {
    listar: (req, res) => {
        const name = req.query.name;
        const tel = req.query.tel;
        const mail = req.query.mail;
        // console.log(name);
        // console.log(tel);
        // console.log(mail);
        if(name != undefined)
        {
            contacto.find({status: 1, nombre: name})
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(400).send("Algo salio mal"); // BAD REQUEST
            });
        }
        else if(tel != undefined)
        {
            contacto.find({status: 1, telefono: tel})
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(400).send("Algo salio mal"); // BAD REQUEST
            });
        }
        else if(mail != undefined)
        {
            contacto.find({status: 1, correo: mail})
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(400).send("Algo salio mal"); // BAD REQUEST
            });
        }
        else
        {
            contacto.find({status: 1})
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(400).send("Algo salio mal"); // BAD REQUEST
            });
        }
    },
    ver: (req, res) => {
        const id = req.params.id;
        
        contacto.findOne({status: 1, _id: id})
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(400).send("No se encontró el id"); // BAD REQUEST
            });
    },
    crear: (req, res) => {
        const data = req.body;
        contacto.create(data).then(response => {
            res.send(response);
        });
    },
    borrar: (req, res) => {
        const id = req.params.id;
        contacto.findOne({status: 1, _id: id})
            .then(data => {
                data.status = 2;
                data.save();
                res.send("Se elimino correctamente a " + data.nombre + "\n" + data);
            })
            .catch(err => {
                res.status(400).send("No se encontro el id"); // Bad request
            });
    },
    editar: (req, res) => {
        const id = req.params.id;
        const name = req.query.name;
        const tel = req.query.tel;
        const mail = req.query.mail;
        contacto.findOne({status: 1, _id: id})
        .then(data => {
            if (name != undefined)
            {
                data.nombre = name;
            }
            if (tel != undefined)
            {
                data.telefono = tel;
            }    
            if (mail != undefined)
            {
                data.correo = mail;
            }
            data.save();
            res.send("Se actualizó correctamente a " + data.nombre + "\n" + data);
        })
        .catch(err => {
            res.status(400).send("No se encontro el id");
        });
    }
} 

// find, findOne, findById, create, save

// SELECT * from contactos WHERE status = 1 AND _id = id LIMIT 1