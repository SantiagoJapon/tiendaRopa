var mongoose = require('mongoose');
Schema = mongoose.Schema;
var empleadoSchema = new mongoose.Schema({
    id : String,
    nombres : String,
    apellidos : String,
    edad : Number,
    genero : String,
    estadoCivil : String,
    cargo : String,
    telefono : String,
    cedula : String,
})

var empleado = mongoose.model('empleado', empleadoSchema);
module.exports = empleado;