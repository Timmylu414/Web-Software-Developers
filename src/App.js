import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div>
      <Container fluid className='frontPage'>
        <Row className='header0'>
          <Col>Logo</Col>
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
        <Row className='header1'>
          <Col>
            <h3>logo</h3>
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
          <Col>image</Col>
        </Row>
        <Row className='mainText'>
          <Col>
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
              <Col>
              <button className='readmore'>READ MORE</button>
              </Col>
              <Col></Col>
            </Row>
          </Col>
          <Col>Image</Col>
        </Row>
      </Container>
    </div>

    
  );
}

export default App;
