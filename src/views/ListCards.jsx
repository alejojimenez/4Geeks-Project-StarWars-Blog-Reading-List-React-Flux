import React, { useContext } from 'react';
import { Context } from '../store/appContext';

//seccion - Hooks =  useContext()
import Cards from './Cards.jsx';

const ListCards = () => {
    const { store, actions } = useContext(Context);
        return (
            <>
                <button className = "light" onClick={ ()=>actions.fetchSwapies() }>Swapi Star Wars</button>
                {
                    store.swapiList.map( (item, index)=>( <Cards key={index} data={item}/> ))
                    
                }
            </>
        )
}

export default ListCards;
