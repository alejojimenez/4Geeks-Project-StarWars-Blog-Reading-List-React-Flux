import React from 'react';
import { BsHeart } from 'react-icons/bs';
import { CardDeck, Card, Button } from 'react-bootstrap';


const Cards = (props) => {
    return (
        <>
            <CardDeck>
                <Card
                    style={{ width: '17rem' }}
                    className="mb-1"
                >
                    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png" />
                    <Card.Body>
                        <Card.Title>{props.data.name}</Card.Title>
                        <Card.Text>
                            <p>Gender: {props.data.gender}</p>
                            <p>Hair Color: {props.data.hair_color}</p>
                            <p>Eye-Color: {props.data.eye_color}</p>
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

export default Cards;
