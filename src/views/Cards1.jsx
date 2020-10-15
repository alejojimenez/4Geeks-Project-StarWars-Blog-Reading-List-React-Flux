import React from 'react';
import { BsHeart } from 'react-icons/bs';
import { CardDeck, Card, Button } from 'react-bootstrap';


const Cards1 = (props) => {
    return (
        <>
            <CardDeck>
                <Card
                    style={{ width: '24rem' }}
                    className = "col-md-10"
                >
                    <Card.Img variant="top" src="https://inteng-storage.s3.amazonaws.com/images/uploads/sizes/starwars-1_resize_md.jpg" />
                    <Card.Body>
                        <Card.Title>{props.data.name}</Card.Title>
                        <Card.Text>
                            <p>Population: {props.data.population}</p>
                            <p>Terrain: {props.data.terrain}</p>
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

export default Cards1;
