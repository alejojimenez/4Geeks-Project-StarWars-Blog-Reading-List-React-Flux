import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import { Card, Button, Image, Row } from 'react-bootstrap';

const CardDetail1 = () => {
    // const { store, actions } = useContext(Context);
    return (
        <>
            <br></br>
            <Card style={{ width: '60rem', height: '60rem' }}>
                <Image variant="left" src="https://los40.com/los40/imagenes/2017/05/25/album/1495704399_151487_1495704535_album_normal.jpg" />
                <Card.Body>
                    <Card.Title>Titulo</Card.Title>
                    <Card.Text variant="right">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content. This is a wider card with supporting text below as a 
                        natural lead-in to additional content. This card has even longer content t
                        han the first to show that equal height action.
                        <Row className = "linea1">
                            <span style={{ color: 'red' }}>Name</span>+' '+
                            <span style={{ color: 'red' }}>Gender</span>+' '+
                            <span style={{ color: 'red' }}>Hair Color</span>+' '+
                            <span style={{ color: 'red' }}>Eye Color</span>+' '+
                            <span style={{ color: 'red' }}>Heigth</span>+' '+
                            <span style={{ color: 'red' }}>Mass</span>
                        </Row>
                    </Card.Text>
                    <Link to = '/'>                    
                        <Button variant="outline-primary">
                            Go to home
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardDetail1;
