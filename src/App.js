import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import NavBarTop from './components/NavBarTop';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

//store - context
import injectContext from './store/appContext';

//secciones 
import Home from './views/Home.jsx';
import NotFound from './views/NotFound.jsx';
import CardDetail from './components/CardDetail';
import CardDetail1 from './components/CardDetail1';
import CardDetail2 from './components/CardDetail2';

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
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route exact path = '/card-detail/' component = {CardDetail} />
          <Route exact path = '/card-detail1' component = {CardDetail1} />
          <Route exact path = '/card-detail2' component = {CardDetail2} />
          <Route render = {NotFound} />
        </Switch>
      </BrowserRouter>
    </Container>

    );
}

export default injectContext(App);