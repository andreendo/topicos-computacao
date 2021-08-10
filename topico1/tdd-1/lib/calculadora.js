const validar = require('./clientevalidador');

class Calculadora {
    montarPropostas(cliente) {
        validar(cliente);

        if (cliente.salario < 1000) {
            return [
                criarProposta(2, 2, cliente.valorFinanciado),
                criarProposta(2, 3, cliente.valorFinanciado)
            ];
        }

        if (cliente.salario < 5000) {
            return [
                criarProposta(1.3, 2, cliente.valorFinanciado),
                criarProposta(1.5, 4, cliente.valorFinanciado),
                criarProposta(1.5, 10, cliente.valorFinanciado)
            ];
        }

        return [
            criarProposta(1.1, 2, cliente.valorFinanciado),
            criarProposta(1.3, 4, cliente.valorFinanciado),
            criarProposta(1.3, 10, cliente.valorFinanciado),
            criarProposta(1.4, 20, cliente.valorFinanciado)
        ];
    }
}

function criarProposta(fator, parcelas, valor) {
    return {
        total: fator * valor,
        numeroParcelas: parcelas,
        valorDaParcela: (fator * valor) / parcelas
    };
}

module.exports = Calculadora;