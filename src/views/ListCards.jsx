import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Button } from 'react-bootstrap';

//seccion - Hooks =  useContext()
import Cards from './Cards.jsx';

const ListCards = () => {
    const { store, actions } = useContext(Context);
        return (
            <>
                <Button variant="outline-light" onClick={ ()=>actions.fetchSwapies() }></Button>
                {
                    store.swapiList.map( (item, index)=>( <Cards key={index} ir={index++} data={item}/> ))
                    
                }
            </>
        )
}

export default ListCards;
