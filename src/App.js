import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBarTop from './components/NavBarTop';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

//secciones 
// import ListCards from './view/ListCards';
// import Cards from './view/Cards';
// import CardDetail from './view/CardDetail';

function App() {
  return (

    <Container fluid>
      <BrowserRouter>
        <Row>
          <Col>
            <NavBarTop />
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

export default App;
