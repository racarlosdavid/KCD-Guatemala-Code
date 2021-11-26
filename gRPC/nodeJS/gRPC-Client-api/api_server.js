const express = require('express');
const app = express();
var morgan = require('morgan');
var cors = require('cors');

//Settings
const port = 3000;

//Middlewares
app.use(express.json());
app.use(morgan('dev'));
//app.use(cors());

var corsOptions = { origin: true, optionsSuccessStatus: 200 };

app.use(cors(corsOptions));

app.use((req, res, next) => {

  // Dominio que tengan acceso (ej. 'http://example.com')
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Metodos de solicitud que deseas permitir
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

  // Encabecedados que permites (ej. 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Headers', '*');

  next();
});


//Routes
app.use('/kcd-guatemala',require('./routes/kcd-guatemala'));

app.listen(port,()=>{
    console.log('Servidor en el puerto', port);
}); 