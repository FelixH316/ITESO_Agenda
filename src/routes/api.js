/*
    BRIEF:      Agenda API
    AUTHOR:     Félix Armenta Aguiñaga
    DATE:       2022-12-12
    VERSION:    0.0.1
*/

const express = require("express");         // Middleware para interpretar el body en json
const router = require("express").Router();
const contactosController = require("./../controllers/contactos");

// SEE ALL
router.get("/contactos", contactosController.listar);

// SEE ONE
router.get("/contactos/:id", contactosController.ver);

// CREATE
//router.use("/contactos", express.json()); // para todos los endpoints dentro de contactos
router.post("/contactos", express.json(), contactosController.crear); // Middleware de la linea 2

// ERASE
router.get("/contactos/borrar/:id", contactosController.borrar);

// UPDATE
router.get("/contactos/editar/:id", contactosController.editar);



module.exports = router;

// usuario - ui - (route - controller - model) - db