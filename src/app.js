const express = require('express');
const bodyParser = require('body-parser');

const app = express(); /* Modelo MVC */
const router = express.Router(); /* Arquivo de rotas */

//Carregar rotas
const indexRoute = require('./routes/index');
const productRoute = require('./routes/product');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // Codifica a url

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app; // Exportando app