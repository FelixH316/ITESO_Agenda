const express = require("express");
const mongoose = require("mongoose");

const apiRoutes = require("./src/routes/api");

const app = express();

const port = 3000;

app.use(apiRoutes);

app.get("", (req, res) => {
    res.send("api works");
});

// const uri = "mongodb+srv://hope0:<password>@cluster0.bqmgv5l.mongodb.net/?retryWrites=true&w=majority";
// const url = "mongodb+srv://hope0:EfgmEoZV0VWtnKUh@cluster0.bqmgv5l.mongodb.net/agenda_db?retryWrites=true&w=majority";
// const urm = "mongodb+srv://<username>:<password>@cluster0.bqmgv5l.mongodb.net/?retryWrites=true&w=majority";
const urn = 'mongodb+srv://usuario_prueba:hduFAMAeAunbWEX5@cluster0.bqmgv5l.mongodb.net/agenda_contactos?retryWrites=true&w=majority';

mongoose.connect(urn, (err) => {    // Error-first callback
    if(err) {
        console.log("No se pudo conectar a la base de datos");
    }
    else{
        console.log("Se conecto correctamente a la base de datos");
        // Usar el listen en esta parte quiere decir que nuestra aplicacion depende de la DB
        // Si tenemos una pagina publica, primero debemos hacer el listen aparte
        app.listen(port, () => {
            console.log("app is running in port " + port);
        });
    }
});
