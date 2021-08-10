const Schema = require('validate');

const clienteSchema = new Schema({
    nome: {
        type: String,
        required: true,
        length: { min: 3, max: 200 },
        message: 'nome invalido'
    },
    salario: {
        type: Number,
        required: true,
        use: { nonNegative: val => val > 0 },
        message: 'salario invalido'
    },
    idade: {
        type: Number,
        required: true,
        size: { min: 18, max: 70 },
        message: 'idade invalida'
    },
    valorFinanciado: {
        type: Number,
        required: true,
        size: { min: 100, max: 100000 },
        message: 'valor financiado invalido'
    }
});

function validar(cliente) {
    const errors = clienteSchema.validate(cliente);
    if (errors.length > 0)
        throw errors;
}

module.exports = validar;