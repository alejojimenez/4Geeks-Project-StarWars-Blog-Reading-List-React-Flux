import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link, useParams } from 'react-router-dom';
import { Container, Table, Image, Row } from 'react-bootstrap';

const CardDetail1 = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    useEffect( () => {
        actions.fetchCardDetail1(id);
    }, [])
    console.log('---Store---', store.cardDetailPlanets)

    return (
        <>
            <Container>
                <Row>
                    <br /><br /><br />
                    <div className="row justify-content-md-center">
                        <div className = "col-5">
                            <Image style={{ width: '25rem', height: '20rem' }} src="https://los40.com/los40/imagenes/2017/05/25/album/1495704399_151487_1495704535_album_normal.jpg" />
                        </div>
                        <div className = "col-5 text-center">
                            <h1>{store.cardDetailPlanets.name}</h1>
                            <p>Some quick example text to build on the card title and make up the bulk of
                                the card's content. This is a wider card with supporting text below as a 
                                natural lead-in to additional content. This card has even longer content t
                                han the first to show that equal height action.
                            </p>
                            <Link className="btn btn-outline-primary" variant="outline-primary" to = '/'>                    
                                Go to home
                            </Link>
                        </div>
                        <div className = "linea1 col-10">
                            <br />
                            <Table style={{ color: 'red' }} striped bordered hover size="sm">
                                <thead className = "text-center">
                                    <tr>
                                        <th>Name</th>
                                        <th>Climate</th>
                                        <th>Population</th>
                                        <th>Orbital Period</th>
                                        <th>Rotation Period</th>
                                        <th>Diameter</th>
                                    </tr>
                                </thead>
                                <tbody className = "text-center">
                                    <tr>
                                        <td>{store.cardDetailPlanets.name}</td>
                                        <td>{store.cardDetailPlanets.climate}</td>
                                        <td>{store.cardDetailPlanets.population}</td>
                                        <td>{store.cardDetailPlanets.orbital_period}</td>
                                        <td>{store.cardDetailPlanets.rotation_period}</td>
                                        <td>{store.cardDetailPlanets.diameter}</td>
                                    </tr>
                                </tbody>
                            </Table>                                
                        </div>
                    </div>
                </Row>            
            </Container>
        </>
    )
}

export default CardDetail1;
