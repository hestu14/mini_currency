import React, { Component } from 'react';
import { Form, Container, Col, Row } from 'react-bootstrap';
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
      thirdBox: ''
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

  inputMoney(){
    this.setState({ inputMoney: this.refs.money.value});
    }
    

  convertMoney () {
    var box1 = this.state.firstBox;
    var box2 = this.state.secondBox;
    var inputMoney = this.state.inputMoney;
    var result = this.state.thirdBox;

    var money1 = "this.state." + box1;
    var money2 = "this.state." + box2;

    result = inputMoney / money1 * money2 ;

    console.log(box1);
    console.log(typeof(money1));
    console.log(result)

  }

  handleClick = () => { 
    this.convertMoney()
   }



  render() {

    return (
      <div>
        <Container className="mt-5">
          <Form>
            <Form.Group>
              <Form.Label>Input Nominal</Form.Label>
              <Form.Control ref="money" type="text" placeholder="ex: 100" value={this.state.inputMoney} onInput={()=>{this.inputMoney();}}/>
            </Form.Group>
          </Form>

          <Row>
            <Col>

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


            <Col xs={1}>
              <div className='text-convert'> to </div>
            </Col>


            <Col>
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

            <Col>
              <button type="button" className="button-convert" onClick={this.handleClick}> Convert </button>
            </Col>
          </Row>


          <Form>
            <Form.Group>
              <Form.Label>Result</Form.Label>
              <Form.Control type="text" disabled value={this.state.thirdBox}/>
            </Form.Group>
          </Form>


          <div>
            <h4> Rates terhadap USD </h4>
            <h6> EUR : {this.state.eur} </h6>
            <h6> IDR : {this.state.idr} </h6>
            <h6> JPY : {this.state.jpy} </h6>
            <h6> SGD : {this.state.sgd} </h6>
          </div>

        </Container>
      </div >
    );
  }
}

export default App;
