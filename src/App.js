import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import NavBarTop from './components/NavBarTop';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

//store - context
import injectContext from './store/appContext';

//secciones 
import ListCards from './views/ListCards.jsx';
import ListCards1 from './views/ListCards1.jsx';
import ListCards2 from './views/ListCards2.jsx';

function App() {
  return (

    <Container>
      <BrowserRouter>
      
        <Row>
          <Col>
            <NavBarTop />
            <br></br>
          </Col>
        </Row>

        <Row className = "linea">
          <br />
          <h1 style={{ color: 'red' }} >Characters</h1>
          <br />
        </Row>
        <Row>
            <div className = "row flex-row flex-nowrap overflow-auto">
              <ListCards />
            </div>
        </Row>

        <Row className = "linea">
          <br />
          <h1 style={{ color: 'red' }} >Planets</h1>
          <br />
        </Row>
        <Row>
            <div className = "row flex-row flex-nowrap overflow-auto">
              <ListCards1 />
            </div>
        </Row>

        <Row className = "linea">
          <br />
          <h1 style={{ color: 'red' }} >Vehicles</h1>
          <br />
        </Row>
        <Row>
            <div className = "row flex-row flex-nowrap overflow-auto">
              <ListCards2 />
            </div>
        </Row>

        <Row className = "linea">
          <br />
          <br />
        </Row>

        <Switch>
          {/* <Route exact path = '/' component = {} />
          <Route exact path = '/favorites' component = {} />
          <Route exact path = '/card-detail' component = {} />                            
          <Route render = {NotFound} /> */}
        </Switch>
      </BrowserRouter>
    </Container>

    );
}

export default injectContext(App);