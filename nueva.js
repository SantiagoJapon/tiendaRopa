var mongoose = require('mongoose');
Schema = mongoose.Schema;

var nuevaSchema = new mongoose.Schema({
    id : String,
    marca : String,
    talla : String,
    estilo : String,
    tipo : String,
})
var nueva = mongoose.model('nueva', nuevaSchema);
module.exports = nueva;