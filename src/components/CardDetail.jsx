import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link, useParams } from 'react-router-dom';
import { Container, Table, Image, Row } from 'react-bootstrap';

const CardDetail = (props) => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    useEffect( () => {
        actions.fetchCardDetail(id);
    }, [])
    console.log('---Store---', store.cardDetailCharacter)
    return (
        <>
            <Container>
                <Row>
                    <br /><br /><br />
                    <div className="row justify-content-md-center">
                        <div className = "col-5">
                            <Image style={{ width: '25rem', height: '20rem' }} src="https://staticuestudio.blob.core.windows.net/buhomag/2015/12/07200816/br.jpg" />
                        </div>
                        <div className = "col-5 text-center">
                            <h1>{store.cardDetailCharacter.name}</h1>
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
                                        <th>Gender</th>
                                        <th>Hair Color</th>
                                        <th>Eye Color</th>
                                        <th>Heigth</th>
                                        <th>Mass</th>
                                    </tr>
                                </thead>
                                <tbody className = "text-center">
                                    <tr>
                                        <td>{store.cardDetailCharacter.name}</td>
                                        <td>{store.cardDetailCharacter.gender}</td>
                                        <td>{store.cardDetailCharacter.hair_color}</td>
                                        <td>{store.cardDetailCharacter.eye_color}</td>
                                        <td>{store.cardDetailCharacter.height}</td>
                                        <td>{store.cardDetailCharacter.mass}</td>
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

export default CardDetail;
