const express = require('express');

const app = express(); /* Modelo MVC */

const router = express.Router(); /* Arquivo de rotas */

var route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API", // Título da API
        version: "0.0.1" //Versão da API
    });
});

app.use('/', route);

module.exports = app; // Exportando app