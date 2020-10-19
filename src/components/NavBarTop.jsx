import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import {Navbar, Dropdown, Image} from 'react-bootstrap';

const NavBarTop = () => {

    const { store } = useContext(Context);

    // function delList(index) {
    //     if(index > -1) {
    //       const filterData = valueList.filter(item => item !== valueList[index]);
    //       setValueList(filterData);
    //       methodDelete(filterData);
    //     }
    // }

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
                        Favorites {' '} <span className = "countFavorites">{store.favorites.length}</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu alignRight className = "dropdown-menu-align-right">
                        <Dropdown.Item href="">
                            <div>
                                <ul>
                                    { store.favorites.map((valor, index) => {
                                        return (
                                            <li key={index} className = "listForm" >
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