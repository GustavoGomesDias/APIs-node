const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express(); /* Modelo MVC */
const router = express.Router(); /* Arquivo de rotas */

// Conecta o banco de dados
mongoose.connect('mongodb+srv://Gustavo:Gustavo@cluster0.gxstv.mongodb.net/API-NodeJs-Balta?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

// Carregar os Models
const Product = require('./models/product');

// Carregar rotas
const indexRoute = require('./routes/index');
const productRoute = require('./routes/route-product');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // Codifica a url

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app; // Exportando app