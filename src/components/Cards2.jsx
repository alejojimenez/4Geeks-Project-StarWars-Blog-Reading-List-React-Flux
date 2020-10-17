import React from 'react';
import { Link } from 'react-router-dom';
import { BsHeart } from 'react-icons/bs';
import { CardDeck, Card, Button, Image } from 'react-bootstrap';

const Cards2 = (props) => {
    return (
        <>
            <CardDeck>
                <Card
                    style={{ width: '25rem' }}
                    className = "col-md-10"
                >
                    <Image variant="top" src="https://media.wired.com/photos/5dfbd524f3e943000879987a/master/pass/Culture_MilitaryStarWars_MCDSTWA_WD041.jpg" fluid />
                    <Card.Body>
                        <Card.Title>{props.data.name}</Card.Title>
                        <Card.Text>
                            <div>Model: {props.data.model}</div>
                            <div>Length: {props.data.length}</div>
                            <div>Passengers: {props.data.passengers}</div>
                        </Card.Text>
                        <Link to = '/card-detail2'>
                            <Button variant="outline-primary">
                                    Learn more!
                            </Button>
                        </Link>
                        {'  '}
                        <Button variant="outline-warning"> <BsHeart /> </Button>
                    </Card.Body>
                </Card>
            </CardDeck>
        </>
    )
}

export default Cards2;
