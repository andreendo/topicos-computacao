const { toBeDeepCloseTo } = require('jest-matcher-deep-close-to');
expect.extend({ toBeDeepCloseTo });

const Calculadora = require('../lib/calculadora');
const calculadora = new Calculadora();

describe('Calculadora', () => {
    test('cliente com salario ate 1000', () => {
        const props = calculadora.montarPropostas({
            nome: 'Joao da Silva',
            idade: 35,
            salario: 800.00,
            valorFinanciado: 2000.00
        });
        expect(props.length).toBe(2);
        expect(props[0]).toBeDeepCloseTo({
            total: 4000.00,
            numeroParcelas: 2,
            valorDaParcela: 2000.00
        }, 2);        
        expect(props[1]).toBeDeepCloseTo({
            total: 4000.00,
            numeroParcelas: 3,
            valorDaParcela: 1333.33
        }, 2);

        // Para refatorar esta parte, https://github.com/maasencioh/jest-matcher-deep-close-to
        // expect(props[0].total).toBeCloseTo(4000.00);
        // expect(props[0].numeroParcelas).toBe(2);
        // expect(props[0].valorDaParcela).toBeCloseTo(2000.00);
        // expect(props[1].total).toBeCloseTo(4000.00);
        // expect(props[1].numeroParcelas).toBe(3);
        // expect(props[1].valorDaParcela).toBeCloseTo(1333.33);
        // package validate
    });

    test('cliente com salario > 1000 e < 5000', () => {
        const props = calculadora.montarPropostas({
            nome: 'Maria Oliveira',
            idade: 26,
            salario: 2000.00,
            valorFinanciado: 10000.00
        });
        expect(props.length).toBe(3);
        expect(props[0]).toBeDeepCloseTo({
            total: 13000.00,
            numeroParcelas: 2,
            valorDaParcela: 6500.00
        }, 2);
        expect(props[1]).toBeDeepCloseTo({
            total: 15000.00,
            numeroParcelas: 4,
            valorDaParcela: 3750.00
        }, 2);
        expect(props[2]).toBeDeepCloseTo({
            total: 15000.00,
            numeroParcelas: 10,
            valorDaParcela: 1500.00
        }, 2);                
    });

    test('cliente com salario > 5000', () => {
        const props = calculadora.montarPropostas({
            nome: 'Antonio Maria Oliveira',
            idade: 26,
            salario: 10000.00,
            valorFinanciado: 10000.00
        });
        expect(props.length).toBe(4);
        expect(props[0]).toBeDeepCloseTo({
            total: 11000.00,
            numeroParcelas: 2,
            valorDaParcela: 5500.00
        }, 2);
        expect(props[1]).toBeDeepCloseTo({
            total: 13000.00,
            numeroParcelas: 4,
            valorDaParcela: 3250.00
        }, 2);
        expect(props[2]).toBeDeepCloseTo({
            total: 13000.00,
            numeroParcelas: 10,
            valorDaParcela: 1300.00
        }, 2);                
        expect(props[3]).toBeDeepCloseTo({
            total: 14000.00,
            numeroParcelas: 20,
            valorDaParcela: 700.00
        }, 2);                
    });    

    test('cliente sem nome lanca excecao', () => {
        expect(() => calculadora.montarPropostas({
            idade: 26,
            salario: 10000.00,
            valorFinanciado: 10000.00
        }))
            .toThrow('nome invalido');
    });

    test('cliente com salario negativo lanca excecao', () => {
        expect(() => calculadora.montarPropostas({
            nome: 'Antonio Maria Oliveira',
            idade: 26,
            salario: -10000.00,
            valorFinanciado: 10000.00
        }))
            .toThrow('salario invalido');
    });

    test('cliente com idade invalida lanca excecao', () => {
        expect(() => calculadora.montarPropostas({
            nome: 'Antonio Maria Oliveira',
            idade: 77,
            salario: 10000.00,
            valorFinanciado: 10000.00
        }))
            .toThrow('idade invalida');
    });

    test('cliente com valor financiado invalido lanca excecao', () => {
        expect(() => calculadora.montarPropostas({
            nome: 'Antonio Maria Oliveira',
            idade: 66,
            salario: 10000.00,
            valorFinanciado: 100000.10
        }))
            .toThrow('valor financiado invalido');
    });
});