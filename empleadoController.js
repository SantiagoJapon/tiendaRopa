const empleado = require("../models/empleados");

var Empleados = require("../models/empleados"),
    express = require("express"),
    router = express.Router();

router.post('/crearEmpleado', (request, response) => {
    var body = request.body;
    console.log(body);
    Empleados.insertMany({
        _id : body._id,
        nombres : body.nombres,
        apellidos : body.apellidos,
        edad : body.edad,
        genero : body.genero,
        estadoCivil : body.estadoCivil,
        cargo : body.cargo,
        telefono : body.cargo,
        cedula : body.cedula, 
    }).then(function(){
        console.log("Empleado creado");
        response.status(200).json("Empleado guardado")
    });

});
router.post('/editarEmpleado', (req, response) => {
    var body = req.body;
    empleado.updateOne({
        _id : body._id
    },{
        $set : {
            _id : body._id,
            nombres : body.nombres,
            apellidos : body.apellidos,
            edad : body.edad,
            genero : body.genero,
            estadoCivil : body.estadoCivil,
            cargo : body.cargo,
            telefono : body.cargo,
            cedula : body.cedula,     
        }
    }).then(function(){
        console.log("Se actualizo empleado");
        response.status(200).json("Datos actualizados");
    }).catch(function(err){
        console.log(err);
        response.status(500).json("Salio mal")
    });

});

router.post('/eliminarEmpleado',(req, response) =>{
    var body = req.body;
    empleado.deleteOne({
        _id : body._id
    },{
        $set : {
            _id : body._id,
            nombres : body.nombres,
            apellidos : body.apellidos,
            edad : body.edad,
            genero : body.genero,
            estadoCivil : body.estadoCivil,
            cargo : body.cargo,
            telefono : body.cargo,
            cedula : body.cedula,    
        }
    }).then(function(){
        console.log("se elimino");
        response.status(200).json("eliminado");
    }).catch(function(err){
        console.log(err);
        response.status(500).json("mal")
    });
});
module.exports = router;