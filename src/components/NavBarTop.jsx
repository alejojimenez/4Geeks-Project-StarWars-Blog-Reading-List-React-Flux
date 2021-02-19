import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import { Navbar, Dropdown, Image } from 'react-bootstrap';

const NavBarTop = () => {

    const { store, actions: { setFavorites } } = useContext(Context);

    function delList(index) {
        if(index > -1) {
            const filterData = store.favorites.filter(item => item !== store.favorites[index]);
            console.log('---FavoriteDelete', store.favorites[index]);
            setFavorites(filterData);
            console.log(store.favorites);
        }
    }

    return (

        <>
            <Navbar bg="dark" variant="dark" className = "fixed-top">
                <Navbar.Brand href="#home">
                <Link to = '/'> 
                    <Image
                        src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG34.png"
                        width="60"
                        height="60"
                        alt="Star Wars"
                    />
                </Link>
                </Navbar.Brand>
                <Dropdown className = "ml-auto" >
                    <Dropdown.Toggle id="dropdown-basic">
                        Favorites {' '} <span className = "countFavorites">{store.favorites.length}</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu alignRight className = "dropdown-menu-align-right">
                        <Dropdown.Item href="">
                            <div>
                                <ul>
                                    { store.favorites.map((valor, index) => {
                                        return (
                                            <li key={index} className = "listForm" onClick = { () => { delList(index)} } >
                                                {valor} <span className = "positionIcons"> {' '} <FaTrashAlt /> </span>
                                            </li>
                                        )})
                                    }
                                </ul>
                            </div>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar>
        </>
    )
}

export default NavBarTop;