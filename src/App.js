import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <>
    <div className='sticky-header'>
      <Row>
          <Col>
            <a href="https://nicepage.com/" target="_blank" rel="noopener noreferrer">
              <button className='nicepage-button'><img className='logo0-img' src={require('./images/logo0.png')} height={50} /></button>
            </a>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col>sm</Col>
          <Col>md</Col>
          <Col>lg</Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
    </div>
    <div className='front-page-header'>
      <Row >
          <Col>
            <a href="https://nicepage.com/" target="_blank" rel="noopener noreferrer">
              <button className='logo-button'><img className='logo1-img' src={require('./images/logo1.png')} height={80} /></button>
            </a>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col><img className='bar-img' src={require('./images/bar.png')} height={60} /></Col>
      </Row>
    </div>
    <div className='front-page'>
      <Container fluid className='frontPage'>
        
        
        <Row className='mainPage'>
          <Col className='mainText'>
            <Row>
              <h1>Web Software Developers</h1>
            </Row>
            
            <Row>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                irure dolor in reprehenderit in voluptate velit esse cillum
              </p>
            </Row>
            <Row>
              <p>image from Freepik</p>
            </Row>
            <Row>
              <button className='readmore'>READ MORE</button>
            </Row>
          </Col>
          <Col>
            <img className='laptop-img' src={require('./images/laptop.png')} height={550} />
          </Col>
        </Row>
      </Container>
    </div>

    </>
  );
}

export default App;
