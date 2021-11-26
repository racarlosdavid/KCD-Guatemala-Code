var express = require('express');
var router = express.Router();

const client = require('../gRPC-Client/gRPC_client.js')

router.get('/', function(req, res) {
    res.status(200).send("API - KCD Guatemala");
});

router.post('/addComment',  function(req, res) {
    console.log(req.body);
    const data_commentario = {
        nombre : req.body.nombre,
        comentario : req.body.comentario
    }
    client.AddComment(data_commentario, function(err, response) {
        //console.log('Greeting:', response.message);
        res.status(200).send({mensaje:response.message});
    });
    
  
});

router.get('/getComments',  function(req, res) {
    const rows = [];
    //const ListarCasosRequest = { id_evento : req.body.id_evento };
    //const call = client.ListarCasos(ListarCasosRequest);
    const call = client.GetComments();
    call.on('data', function(data) {
        rows.push(data);
    });
    call.on('end', function() {
        console.log('Data obtenida con exito');
        res.status(200).send(rows);
    });
    call.on('error', function(e) {
        console.log('Error al obtener la data');
        res.status(500).send({mensaje:"Error al obtener la data"});
    });
    /*
    call.on('status', function(status) {
        // process status
    });
    */
});


module.exports = router;