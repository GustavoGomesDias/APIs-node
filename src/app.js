const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config')

const app = express(); /* Modelo MVC */
const router = express.Router(); /* Arquivo de rotas */

// Conecta o banco de dados
mongoose.connect(config.connectionString, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

// Carregar os Models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

// Carregar rotas
const indexRoute = require('./routes/index');
const productRoute = require('./routes/route-product');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // Codifica a url

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

module.exports = app; // Exportando app