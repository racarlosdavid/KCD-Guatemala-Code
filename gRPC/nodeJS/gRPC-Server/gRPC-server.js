//var PROTO_PATH = '../proto/kcd.proto';
var PROTO_PATH = './proto/kcd.proto';
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var kcd_proto = grpc.loadPackageDefinition(packageDefinition).kcd;

/* Conexion a la base de datos */
const mysqlConnection = require('./mysql_connection');

function AddComment(call, callback) {
  const query = 'INSERT INTO Comentarios (nombre,comentario) VALUES ('+
  '\''+call.request.nombre+'\','+
  '\''+call.request.comentario+'\');';
  
  mysqlConnection.query(query, function(err, rows, fields) {
    if (err) throw err;
    callback(null, {message: 'Commentario insertado en la base de datos'});
  });
}

function GetComments(call) {
  //console.log(call.request);
  
  const query = 'SELECT id,nombre,comentario FROM Comentarios;';

  mysqlConnection.query(query, function(err, rows, fields) {
    if (err) throw err;
    //console.log(rows.length)
    for(const data of rows){
      //console.log(data);
      call.write(data);
    }
    call.end();
  });
  
}
/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
  var server = new grpc.Server();
  server.addService(kcd_proto.KCD.service, {
    AddComment: AddComment,
    GetComments: GetComments
  });
  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
  });
}

main();
