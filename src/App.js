import React from 'react';
import { BrowserRouter } from 'react-router-dom';  //, Switch, Route
import NavBarTop from './components/NavBarTop';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

//store - context
import injectContext from './store/appContext';

//secciones 
import ListCards from './views/ListCards.jsx';

function App() {
  return (

    <Container>
      <BrowserRouter>
        <Row>
          <Col>
            <NavBarTop />
          </Col>
        </Row>
        <Row className = "linea">
          <br></br>
          <h1 style={{ color: 'red' }} >Characters</h1>
          <br></br>
        </Row>
        <Row>
          <Col>
            <div className = "row flex-row flex-nowrap overflow-auto">
              <ListCards />
            </div>
          </Col>
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
