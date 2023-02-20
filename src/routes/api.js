// get /contactos
const express = require("express");         // Middleware para interpretar el body en json
const router = require("express").Router();
const contactosController = require("./../controllers/contactos");

router.get("/contactos", contactosController.listar);
router.get("/contactos/:id", contactosController.ver);
//router.use("/contactos", express.json()); // para todos los endpoints dentro de contactos
router.post("/contactos", express.json(), contactosController.crear); // Middleware de la linea 2

module.exports = router;

// usuario - ui - (route - controller - model) - db