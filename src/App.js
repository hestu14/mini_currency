import React, { Component } from 'react';
import { Form, Container, Col, Row, Jumbotron } from 'react-bootstrap';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      usd: 1,
      eur: '',
      idr: '',
      jpy: '',
      sgd: '',
      inputMoney: '',
      firstBox: 'usd',
      secondBox: 'idr',
      thirdBox: '0'
    };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleClick = this.handleClick.bind(this);


  }

  componentDidMount() {
    axios.get('https://api.frankfurter.app/latest?amount=1&from=USD&to=IDR,EUR,JPY,SGD', {
      "async": true,
      "crossDomain": true,
      "method": "GET",
      // "headers": {
      //   "content-type": "application/json;charset=utf-8",
      // },
      // "processData": false,
      "data": "{}"
    }).then((response) => {
      console.log(response);
      this.setState({
        eur: response.data.rates.EUR,
        idr: response.data.rates.IDR,
        jpy: response.data.rates.JPY,
        sgd: response.data.rates.SGD,
      })
    })
      .catch(error => {
        console.log(error.response)
      });
  }

  handleChange1(event) {
    this.setState({ firstBox: event.target.value });
  }

  handleChange2(event) {
    this.setState({ secondBox: event.target.value });
  }

  inputMoney() {
    this.setState({ inputMoney: this.refs.money.value });
  }


  convertMoney() {
    var box1 = this.state.firstBox;
    var box2 = this.state.secondBox;
    var inputMoney = this.state.inputMoney;


    var money1;
    switch (box1) {
      case 'usd':
        money1 = this.state.usd;
        break;
      case 'idr':
        money1 = this.state.idr;
        break;
      case 'eur':
        money1 = this.state.eur;
        break;
      case 'jpy':
        money1 = this.state.jpy;
        break;
      case 'sgd':
        money1 = this.state.sgd;
    }

    var money2;
    switch (box2) {
      case 'usd':
        money2 = this.state.usd;
        break;
      case 'idr':
        money2 = this.state.idr;
        break;
      case 'eur':
        money2 = this.state.eur;
        break;
      case 'jpy':
        money2 = this.state.jpy;
        break;
      case 'sgd':
        money2 = this.state.sgd;
    }

    var result;
    result = new Intl.NumberFormat('de-DE').format(inputMoney / money1 * money2);

    this.setState({ thirdBox: result });

  }

  handleClick = () => {
    this.convertMoney()
  }



  render() {

    return (
      <div>
        <Jumbotron fluid>
          <Container>
            <h1>Mini Currency</h1>
            <p>
              Build using react, react-bootstrap and axios.
           </p>
          </Container>
        </Jumbotron>

        <Container className="mt-3">
          <Form>
            <Form.Group>
              <Form.Label>Input</Form.Label>
              <Form.Control ref="money" type="text" placeholder="ex: 100" value={this.state.inputMoney} onInput={() => { this.inputMoney(); }} />
            </Form.Group>
          </Form>

          <Row>
            <Col xs={5} lg={4} className="mt-3">

              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select" value={this.state.firstBox} onChange={this.handleChange1}>
                  <option value="usd" selected="selected" >USD</option>
                  <option value="eur">EUR</option>
                  <option value="idr">IDR</option>
                  <option value="jpy">JPY</option>
                  <option value="sgd">SGD</option>
                </Form.Control>
              </Form.Group>

            </Col>


            <Col xs={2} lg={1} className="mt-3">
              <div className='text-convert'> <span> to </span></div>
            </Col>


            <Col xs={5} lg={4} className="mt-3">
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select" value={this.state.secondBox} onChange={this.handleChange2}>
                  <option value="usd">USD</option>
                  <option value="eur">EUR</option>
                  <option value="idr" selected="selected">IDR</option>
                  <option value="jpy">JPY</option>
                  <option value="sgd">SGD</option>
                </Form.Control>
              </Form.Group>
            </Col>

            <Col lg={3} className="mt-3">
              <button type="button" className="button-convert btn btn-secondary" onClick={this.handleClick}> Convert </button>
            </Col>
          </Row>


          <Form className="mt-3">
            <Form.Group>
              <Form.Label>Result</Form.Label>
              <Form.Control type="text" readOnly value={this.state.thirdBox} />
            </Form.Group>
          </Form>


          {/* <div>
            <h4> Rates terhadap USD </h4>
            <h6> EUR : {this.state.eur} </h6>
            <h6> IDR : {this.state.idr} </h6>
            <h6> JPY : {this.state.jpy} </h6>
            <h6> SGD : {this.state.sgd} </h6>
          </div> */}

        </Container>

        <footer id="sticky-footer" class="py-4 text-white-50">
          <div className="container text-center">
            <small>API by : <a target="_blank" rel="noopener noreferrer" href='https://www.frankfurter.app/'>www.frankfurter.app</a></small>
          </div>
        </footer>

      </div >
    );
  }
}

export default App;
