const nueva = require("../models/nueva");

var Nueva = require("../models/nueva"),
    express = require("express"),
    router = express.Router();

router.post('/nuevaRopa', (request, response) => {
    var body = request.body;
    console.log(body);
    Nueva.insertMany({
        _id : body._id,
        marca : body.marca,
        talla : body.talla,
        estilo : body.estilo,
        tipo : body.tipo,
    }).then(function(){
        console.log("Nueva prenda agregada");
        response.status(200).json("Prenda guardada");
    })
    .catch(function(err){
        console.log(err);
        response.status(500).json("No guardado")
    });
})

router.post('/editarPrenda', (req, response) => {
    var body = req.body;
    nueva.updateOne({
        _id : body._id
        },{
            $set : {
                _id : body._id,
                marca : body.marca,
                talla : body.talla,
                estilo : body.estilo,
                tipo : body.tipo,
            }
        }).then(function(){
        console.log("Nueva prenda actualizada");
        response.status(200).json("Prenda actualizada");
        })
        .catch(function(err){
        console.log(err);
        response.status(500).json("No se actualizo")
        });
    });

router.post('/eliminarPrenda', (req, response) => {
    var body = req.body;
    nueva.deleteOne({
        _id : body._id
        
    },{
        $set : {
            _id : body._id,
            marca : body.marca,
            talla : body.talla,
            estilo : body.estilo,
            tipo : body.tipo,
        }
    }).then(function(){
        console.log("Eliminado");
        response.status(200).json("Prenda eliminada");
    })
    .catch(function(err){
        console.log(err);
        response.status(500).json("No se elimino")
    });
});
module.exports = router;