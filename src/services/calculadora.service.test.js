import React from 'react'
import ReactDOM from 'react-dom'
import CalculadoraService from './calculadora.service'

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

describe('Teste do serviço da Calculadora', () => {
    const [calcular, concatenarNumero, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO ] = CalculadoraService();

    it('Somar', () => {
        let x = randomIntFromInterval(1,9);
        let y = randomIntFromInterval(1,9);

        let somar = calcular(x, y, SOMA);

        expect(somar).toEqual(x + y);
    });

    it('Subtrair', () => {
        let x = randomIntFromInterval(1,9);
        let y = randomIntFromInterval(1,9);

        let subtrair = calcular(x, y, SUBTRACAO);

        expect(subtrair).toEqual(x - y);
    });

    it('Multiplicar', () => {
        let x = randomIntFromInterval(1,9);
        let y = randomIntFromInterval(1,9);

        let multiplicar = calcular(x, y, MULTIPLICACAO);

        expect(multiplicar).toEqual(x * y);
    });

    it('Dividir', () => {
        let x = randomIntFromInterval(1,9);
        let y = randomIntFromInterval(1,9);

        let dividir = calcular(x, y, DIVISAO);

        expect(dividir).toEqual(x / y);
    });

    it('Operação inválida: Deve retornar 0', () => {
        let x = randomIntFromInterval(1,9);
        let y = randomIntFromInterval(1,9);

        let operacaoInvalida = calcular(x, y, 'OPERACAO-INVALIDA');

        expect(operacaoInvalida).toEqual(0);
    });

    it('Caso contenha apenas "0" ou "null" o valor deve ser reiniciado', () => {
        let resposnse = concatenarNumero('0', '');

        expect(resposnse).toEqual('');
    });

    it('Caso o primeiro valor digito seja "."o valor deve retornar com o zero na frente "0."', () => {
        let resposnse = concatenarNumero('', '.');

        expect(resposnse).toEqual('0.');
    });

    it('Caso o valor já tenha um ponto "0." o valor deve retornar somete o valor atual sem acrescentara outro ponto', () => {
        let resposnse = concatenarNumero('0.', '.');

        expect(resposnse).toEqual('0.');
    });

});