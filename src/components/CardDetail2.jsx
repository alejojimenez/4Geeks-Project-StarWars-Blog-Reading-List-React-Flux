import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link, useParams } from 'react-router-dom';
import { Container, Table, Image, Row } from 'react-bootstrap';

const CardDetail2 = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    useEffect( () => {
        actions.fetchCardDetail2(id);
    }, [])
    console.log('---Store---', store.cardDetailSpecies)

    return (
        <>
            <Container>
                <Row>
                    <br /><br /><br />
                    <div className="row justify-content-md-center">
                        <div className = "col-5">
                            <Image style={{ width: '25rem', height: '20rem' }} src="https://pm1.narvii.com/6211/943cf27fa773d5da8addbabc3a0c27476cd6a255_hq.jpg" />
                        </div>
                        <div className = "col-5 text-center">
                            <h1>{store.cardDetailSpecies.name}</h1>
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
                                        <th>Classification</th>
                                        <th>Designation</th>
                                        <th>Average Height</th>
                                        <th>Hair Colors</th>
                                        <th>Eye Colors</th>
                                    </tr>
                                </thead>
                                <tbody className = "text-center">
                                    <tr>
                                        <td>{store.cardDetailSpecies.name}</td>
                                        <td>{store.cardDetailSpecies.classification}</td>
                                        <td>{store.cardDetailSpecies.designation}</td>
                                        <td>{store.cardDetailSpecies.average_height}</td>
                                        <td>{store.cardDetailSpecies.hair_colors}</td>
                                        <td>{store.cardDetailSpecies.eye_colors}</td>
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

export default CardDetail2;
