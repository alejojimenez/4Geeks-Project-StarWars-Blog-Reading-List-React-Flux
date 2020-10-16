import React from 'react';
import { Link } from 'react-router-dom';
import { BsHeart } from 'react-icons/bs';
import { CardDeck, Card, Button, Image } from 'react-bootstrap';


const Cards1 = (props) => {
    return (
        <>
            <CardDeck>
                <Card
                    style={{ width: '24rem' }}
                    className = "col-md-10"
                >
                    <Image variant="top" src="https://inteng-storage.s3.amazonaws.com/images/uploads/sizes/starwars-1_resize_md.jpg" fluid />
                    <Card.Body>
                        <Card.Title>{props.data.name}</Card.Title>
                        <Card.Text>
                            <div>Population: {props.data.population}</div>
                            <div>Terrain: {props.data.terrain}</div>
                        </Card.Text>
                        <Button variant="outline-primary">
                            <Link to = '/card-detail1'>
                                Learn more!
                            </Link>
                        </Button>{'  '}
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
