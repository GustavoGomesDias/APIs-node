// Apesar de mongo não ter schema, aqui a gente cria uns como teor de validação

// Diferente das outras exportações, essa aqui precisa de um nome (que no caso, é o 'Product')

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passwaord: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Customer', customerSchema);