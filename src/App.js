import React from 'react';
import { BrowserRouter } from 'react-router-dom';  //, Switch, Route
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

        {/* <Row>
          <Col>
            <Switch>
              <Route exact path = '/' component = {Home} />
              <Route exact path = '/mis-tareas' component = {MyTask} />
              <Route exact path = '/tareas' component = {Tasks} />                            
              <Route render = {NotFound} />
            </Switch>
          </Col>
        </Row> */}
      </BrowserRouter>
    </Container>

    );
}

export default injectContext(App);