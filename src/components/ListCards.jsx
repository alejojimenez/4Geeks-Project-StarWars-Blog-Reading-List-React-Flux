import React, { useContext } from 'react';
import { Context } from '../store/appContext';

//seccion - Hooks =  useContext()
import Cards from './Cards.jsx';

const ListCards = () => {
    const { store, actions } = useContext(Context);
        return (
            <>
                { ()=>actions.fetchSwapies() }
                { store.swapiList.map( (item, index)=>( <Cards key={index} id={++index} data={item}/> )) }
            </>
        )
}

export default ListCards;
