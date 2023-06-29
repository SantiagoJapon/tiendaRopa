const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const conexion = require('./config/conexion');
const ruta = require('./routers/router');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));
app.use('/', ruta);
app.get('/hola', (request, response) => {
    var datos = request.query;
    response.json({message: "Hola" + datos.nombre});
});

app.listen(3000,()=>{
    console.log("Servidor iniciado")
});