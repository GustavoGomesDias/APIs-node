const Product = require('../models/product');

exports.get = (req, res, next) => {
    Product
        .find({ active: true }, 'title price slug')
        .then(data => {
            res.status(200).send(data);

        })
        .catch(e => {
            res.status(400).send(e);
        }); // Salva no DB;
};

exports.getBySlug = (req, res, next) => {
    Product
        .findOne({
            slug: req.params.slug,
            active: true
        }, 'title description price slug tags')
        .then(data => {
            res.status(200).send(data);

        })
        .catch(e => {
            res.status(400).send(e);
        }); // Salva no DB;
};

exports.getById = (req, res, next) => {
    Product
        .findById(req.params.id)
        .then(data => {
            res.status(200).send(data);

        })
        .catch(e => {
            res.status(400).send(e);
        }); // Salva no DB;
};

exports.getByTag = (req, res, next) => {
    Product
        .find({
            tags: req.params.tag,
            active: true
        }, 'tilte description price slug tags')
        .then(data => {
            res.status(200).send(data);

        })
        .catch(e => {
            res.status(400).send(e);
        }); // Salva no DB;
};

exports.post = (req, res, next) => {
    var product = new Product(req.body); // Simples e perigosa
    product
        .save()
        .then(x => {
            res.status(201).send({ message: 'Produto cadastrado com sucesso!' });

        })
        .catch(e => {
            res.status(400).send({
                message: 'Falha ao cadastraro produto.',
                data: e
            });
        }); // Salva no DB
};

exports.put = (req, res, next) => {
    Product
        .findByIdAndUpdate(req.params.id, {
            $set: {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                slug: req.body.slug
            }
        }).then(data => {
            res.status(200).send({
                message: 'Produto atualizado com sucesso!'
            });
        })
        .catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar produto',
                data: e
            });
        });
};

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};
