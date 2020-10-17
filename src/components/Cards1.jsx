import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import { BsHeart } from 'react-icons/bs';
import { CardDeck, Card, Button, Image } from 'react-bootstrap';

const Cards1 = (props) => {
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
                    <Image variant="top" src="https://inteng-storage.s3.amazonaws.com/images/uploads/sizes/starwars-1_resize_md.jpg" fluid />
                    <Card.Body>
                        <Card.Title>{props.data.name}</Card.Title>
                        <Card.Text>
                            <span>Population: {props.data.population}</span> <br />
                            <span>Terrain: {props.data.terrain}</span>
                        </Card.Text>
                        <Link className="btn btn-outline-primary" to={"/planets/"+props.id}>
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

export default Cards1;
