import React from 'react';
import { Link } from 'react-router-dom';
import { BsHeart } from 'react-icons/bs';
import { CardDeck, Card, Button, Image } from 'react-bootstrap';


const Cards = (props) => {
    return (
        <>
            <CardDeck>
                <Card
                    style={{ width: '24rem' }}
                    className = "col-md-10"
                >
                    <Image variant="top" src="https://babyology.com.au/wp-content/uploads/2019/11/yoda-wide.jpg" fluid />
                    <Card.Body>
                        <Card.Title>{props.data.name}</Card.Title>
                        <Card.Text>
                            <div>Gender: {props.data.gender}</div>
                            <div>Hair Color: {props.data.hair_color}</div>
                            <div>Eye-Color: {props.data.eye_color}</div>
                        </Card.Text>
                        <Button variant="outline-primary">
                            <Link to = '/card-detail'>
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

export default Cards;
