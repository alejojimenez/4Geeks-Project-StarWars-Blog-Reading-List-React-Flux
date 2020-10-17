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
                    <Image variant="top" src="https://media.wired.com/photos/5dfbd524f3e943000879987a/master/pass/Culture_MilitaryStarWars_MCDSTWA_WD041.jpg" fluid />
                    <Card.Body>
                        <Card.Title>{props.data.name}</Card.Title>
                        <Card.Text>
                            <span>Model: {props.data.model}</span> <br />
                            <span>Length: {props.data.length}</span> <br />
                            <span>Passengers: {props.data.passengers}</span>
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
