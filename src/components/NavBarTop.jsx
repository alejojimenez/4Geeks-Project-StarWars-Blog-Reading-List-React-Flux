import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Dropdown, Image} from 'react-bootstrap';

const NavBarTop = () => {

    return (
        <>
            <Navbar bg="light" className = "fixed-top">
                <Navbar.Brand href="#home">
                <Link to = '/'> 
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png"
                        width="60"
                        height="40"
                        className="d-inline-block align-top"
                        alt=""
                    />
                </Link>
                </Navbar.Brand>
                <Dropdown className = "ml-auto">
                    <Dropdown.Toggle id="dropdown-basic">
                    <Link to = '/favorites' >Favorites</Link>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar>
        </>
        
        // <>
        //     <Navbar bg="dark" variant="dark">
        //         <Navbar.Brand href="#home">Super ToDo</Navbar.Brand>
        //         <Nav className="mr-auto">
        //             <Link className = "nav-link" to = '/' >Inicio</Link>
        //             <Link className = "nav-link" to = '/mis-tareas' >Mis Tareas</Link>
        //             <Link className = "nav-link" to = '/tareas' >Tareas</Link>
        //         </Nav>
        //     </Navbar>
        // </>
    )
}

export default NavBarTop;