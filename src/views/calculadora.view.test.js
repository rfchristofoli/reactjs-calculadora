import React from 'react';
import ReactDOM from 'react-dom';
import Calculadora from './calculadora.view';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Teste da tela da calculaadora', () => {

    it('Deve renderizar os componentes', () => {
      let div = document.createElement('div');

      ReactDOM.render(<Calculadora />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('Deve limpar o campo de numeros', () => {
        let { getByTestId, getByText } = render(<Calculadora />);

        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('C'));

        expect(getByTestId('txtNumeros')).toHaveValue('0');
    });

    it('Deve somar 5 + 2 e obter = 7', () => {
        let { getByTestId, getByText } = render(<Calculadora />);

        fireEvent.click(getByText('5'));
        fireEvent.click(getByText('+'));
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('='));

        expect(getByTestId('txtNumeros')).toHaveValue('7');
    });

    it('Deve subtrair 10 - 1 e obter = 9', () => {
        let { getByTestId, getByText } = render(<Calculadora />);

        fireEvent.click(getByText('5'));
        fireEvent.click(getByText('+'));
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('='));

        expect(getByTestId('txtNumeros')).toHaveValue('7');
    });

    it('Deve dividir 8 / 4 1 e obter = 2', () => {
        let { getByTestId, getByText } = render(<Calculadora />);

        fireEvent.click(getByText('8'));
        fireEvent.click(getByText('/'));
        fireEvent.click(getByText('4'));
        fireEvent.click(getByText('='));

        expect(getByTestId('txtNumeros')).toHaveValue('2');
    });

    it('Deve multiplicaar 9 * 3 e obter = 27', () => {
        let { getByTestId, getByText } = render(<Calculadora />);

        fireEvent.click(getByText('9'));
        fireEvent.click(getByText('*'));
        fireEvent.click(getByText('3'));
        fireEvent.click(getByText('='));

        expect(getByTestId('txtNumeros')).toHaveValue('27');
    });

    it('Divisão por zero deve anular operaçao e limpar campos', () => {
        let { getByTestId, getByText } = render(<Calculadora />);

        fireEvent.click(getByText('9'));
        fireEvent.click(getByText('/'));
        fireEvent.click(getByText('0'));
        fireEvent.click(getByText('='));

        expect(getByTestId('txtNumeros')).toHaveValue('0');
    });

    it('Operação utilizando ponto e 9.3 + 0.5 = 9.8', () => {
        let { getByTestId, getByText } = render(<Calculadora />);

        fireEvent.click(getByText('9'));
        fireEvent.click(getByText('.'));
        fireEvent.click(getByText('3'));
        fireEvent.click(getByText('+'));
        fireEvent.click(getByText('.'));
        fireEvent.click(getByText('5'));
        fireEvent.click(getByText('='));

        expect(getByTestId('txtNumeros')).toHaveValue('9.8');
    });
});