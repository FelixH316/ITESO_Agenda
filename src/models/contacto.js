const { Schema, model } = require('mongoose');

// status = 1. Activo
// status = 2. Eliminado

const contactoSchema = new Schema({
    nombre: { type: String },
    telefono: { type: String, default: '0' },
    correo: { type: String },
    status: { type: Number, default: 1 }
});

module.exports = model('contactos', contactoSchema);
