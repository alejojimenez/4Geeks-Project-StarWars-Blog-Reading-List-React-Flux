import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import { BsHeart } from 'react-icons/bs';
import { CardDeck, Card, Button, Image } from 'react-bootstrap';

const Cards2 = (props) => {
    const { store, actions: { setFavorites } } = useContext(Context);

    function addNameFavorites() {
        const addNameFavorites = props.data.name;
        console.log('---Props---' + props.data.name);
        setFavorites(store.favorites.concat(addNameFavorites));
        console.log(store.favorites);
    }
    
    return (
        <>
            <CardDeck>
                <Card
                    style={{ width: '25rem' }}
                    className = "col-md-10"
                >
                    <Image variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmBUbMjjJGsSitz5nqVD7PWdCjHIAITNz32Q&usqp=CAU" fluid />
                    <Card.Body>
                        <Card.Title>{props.data.name}</Card.Title>
                        <Card.Text>
                            <span>Title: {props.data.classification}</span> <br />
                            <span>Director: {props.data.designation}</span> <br />
                            <span>Producer: {props.data.average_height}</span>
                        </Card.Text>
                        <Link className="btn btn-outline-primary" to={"/vehicles/"+props.id}>
                            Learn more!
                        </Link>
                        {'  '}
                        <Button variant="outline-warning" onClick={() => addNameFavorites()} > <BsHeart />
                            {console.log(props.data.name)}
                        </Button>
                    </Card.Body>
                </Card>
            </CardDeck>
        </>
    )
}

export default Cards2;
