import React from 'react';
import { BsHeart } from 'react-icons/bs';
import { CardDeck, Card, Button } from 'react-bootstrap';


const Cards2 = (props) => {
    return (
        <>
            <CardDeck>
                <Card
                    style={{ width: '24rem' }}
                    className = "col-md-10"
                >
                    <Card.Img variant="top" src="https://media.wired.com/photos/5dfbd524f3e943000879987a/master/pass/Culture_MilitaryStarWars_MCDSTWA_WD041.jpg" />
                    <Card.Body>
                        <Card.Title>{props.data.name}</Card.Title>
                        <Card.Text>
                            <p>Model: {props.data.model}</p>
                            <p>Length: {props.data.length}</p>
                            <p>Passengers: {props.data.passengers}</p>
                        </Card.Text>
                        <Button variant="outline-primary">Learn more!</Button>{'  '}
                        <Button variant="outline-warning"> <BsHeart /> </Button>
                    </Card.Body>
                </Card>
            </CardDeck>
        </>

        // <div style={{border:1}}>
        //     <h1>{props.data.name}</h1>
        //     <a href={props.data.url} >{props.data.name} </a>
        // </div>
    )
}

export default Cards2;
