import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import { BsHeart } from 'react-icons/bs';
import { CardDeck, Card, Button, Image } from 'react-bootstrap';

const Cards = (props) => {
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
                <Card variant="Secondary"
                    style={{ width: '25rem' }}
                    className="col-md-10" 
                >
                    <Image variant="top" src="https://babyology.com.au/wp-content/uploads/2019/11/yoda-wide.jpg" fluid />
                    <Card.Body>
                        <Card.Title>{props.data.name}</Card.Title>
                        <Card.Text>
                            <span>Gender: {props.data.gender}</span> <br />
                            <span>Hair Color: {props.data.hair_color}</span> <br />
                            <span>Eye-Color: {props.data.eye_color}</span>
                        </Card.Text>
                        <Link className="btn btn-outline-primary" to={"/characters/"+props.id}>
                            Learn more!
                        </Link>
                        {'  '}
                        <Button variant="outline-warning" onClick={() => addNameFavorites() } > <BsHeart />
                            {console.log(props.data.name)}
                        </Button>
                    </Card.Body>
                </Card>
            </CardDeck>
        </>
    )
}

export default Cards;
