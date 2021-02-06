import React, { useState } from 'react';
import '../style/calculadora.view.css';
import { Jumbotron, Container, Row, Col, Button, Form } from 'react-bootstrap'; 
import CalculadoraService from '../services/calculadora.service';

function Calculadora() {
  const [calcular, concatenarNumero, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO ] = CalculadoraService();
  var [txtNumeros, setTxtNumeros] = useState('0');
  var [numero1, setNumero1] = useState('0');
  var [numero2, setNumero2] = useState(null);
  var [operacao, setOperacao] = useState(null);
  
    function adicionarNumero(numero) {
      let resultado;

      if (operacao === null) {
        resultado = concatenarNumero(numero1, numero);
        setNumero1(resultado);
      } else {
        resultado = concatenarNumero(numero2, numero);
        setNumero2(resultado);
      }
      
      setTxtNumeros(resultado);
    };

    function definirOperacao(op) {
      // define a operaccao caso ela nao exista
      if (operacao === null) {
        setOperacao(op);
        return;
      }

      // caso a operacaco esteja definida o numero dois é selecionado e já realiza o calculo
      if (numero2 !== null) {
        let resultado;

        // trata o erro de divisao por zero
        if(numero2 === '0' && operacao === DIVISAO){
          limparNumero();
          return;
        }

        resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao);

        setOperacao(op);
        setNumero1(resultado.toString());
        setNumero2(null);
        setTxtNumeros(resultado.toString());
      }
    }
  
    function resultadoDaOperacao() {
      if (numero2 === null) {
        return;
      }

      // trata o erro de divisao por zero
      if(numero2 === '0' && operacao === DIVISAO){
        limparNumero();
        return;
      }

      let resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao);
      setTxtNumeros(resultado);
    }
  
    function limparNumero() {
      setTxtNumeros('0');
      setNumero1('0');
      setNumero2(null);
      setOperacao(null);
    }

  return (
    <Jumbotron
      style={{
        background: 'transparent !important',
        backgroundColor: '#7f7f7f',
        padding: '5px',
        margin: '5px',
        width: '450px'
    }}>
      <Container>
        <Row>
          <Col xs='3'>
          <Button 
              variant='danger'
              onClick={() => limparNumero()}
              >C
            </Button>
          </Col>

          <Col xs='9'>
            <Form.Control 
              type='text'
              className='text-right'
              readOnly='readOnly' 
              value={txtNumeros}
              data-testid='txtNumeros' 
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Button 
              variant='light'
              onClick={() => adicionarNumero('7')}
              >7
            </Button>
          </Col>
            
          <Col>
            <Button 
                variant='light'
                onClick={() => adicionarNumero('8')}
                >8
              </Button>
          </Col>

          <Col>
            <Button 
                variant='light'
                onClick={() => adicionarNumero('9')}
                >9
              </Button>
          </Col>

          <Col>
            <Button 
                variant='warning'
                onClick={() => definirOperacao(DIVISAO)}
                >/
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button 
                variant='light'
                onClick={() => adicionarNumero('4')}
                >4
              </Button>
          </Col>
            
          <Col>
            <Button 
                variant='light'
                onClick={() => adicionarNumero('5')}
                >5
              </Button>
          </Col>

          <Col>
            <Button 
                variant='light'
                onClick={() => adicionarNumero('6')}
                >6
              </Button>
          </Col>

          <Col>
            <Button 
                variant='warning'
                onClick={() => definirOperacao(MULTIPLICACAO)}
                >*
            </Button>
          </Col>
        </Row>

        <Row>
        <Col>
            <Button 
                variant='light'
                onClick={() => adicionarNumero('1')}
                >1
              </Button>
          </Col>
            
          <Col>
            <Button 
                variant='light'
                onClick={() => adicionarNumero('2')}
                >2
              </Button>
          </Col>

          <Col>
            <Button 
                variant='light'
                onClick={() => adicionarNumero('3')}
                >3
              </Button>
          </Col>
          
          <Col>
            <Button 
                variant='warning'
                onClick={() => definirOperacao(SUBTRACAO)}
                >-
            </Button>
          </Col>
        </Row>

        <Row>
        <Col>
            <Button 
                variant='light'
                onClick={() => adicionarNumero('0')}
                >0
            </Button>
          </Col>
            
          <Col>
          <Button 
                variant='light'
                onClick={() => adicionarNumero('.')}
                >.
            </Button>
          </Col>

          <Col>
            <Button 
              variant='success'
              onClick={() => resultadoDaOperacao()} 
              >=
            </Button>
          </Col>

          <Col>
            <Button 
                variant='warning'
                onClick={() => definirOperacao(SOMA)}
                >+
            </Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
      
  );
}

export default Calculadora;
