import React from 'react';
import { Container, Row } from 'react-bootstrap';

//secciones 
import ListCards from '../components/ListCards.jsx';
import ListCards1 from '../components/ListCards1.jsx';
import ListCards2 from '../components/ListCards2.jsx';

const Home = () => {
    return (
        <Container>
            <Row className = "linea">
                <br />
                    <h1 style={{ color: 'yellow' }} >Characters</h1>
                <br />
            </Row>
            <Row>
                <div className = "row flex-row flex-nowrap overflow-auto">
                    <ListCards />
                </div>
            </Row>
            <Row className = "linea">
                <br />
                    <h1 style={{ color: 'yellow' }} >Planets</h1>
                <br />
            </Row>
            <Row>
                <div className = "row flex-row flex-nowrap overflow-auto">
                    <ListCards1 />
                </div>
            </Row>
            <Row className = "linea">
                <br />
                    <h1 style={{ color: 'yellow' }} >Species</h1>
                <br />
            </Row>
            <Row>
                <div className = "row flex-row flex-nowrap overflow-auto">
                    <ListCards2 />
                </div>
            </Row>
        </Container>
    )
}

export default Home;
