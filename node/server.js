const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//Iniciando o app
const app = express();
app.use(cors());
app.use(express.json());

//Iniciar o DB
mongoose.connect('mongodb+srv://userOmnistack:userOmnistack@cluster0-4i6xl.mongodb.net/node?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


//Requerindo o model
require('./src/models/Products');

//Rotas
app.use('/api', require('./src/routes.js'))

app.listen(3333);

