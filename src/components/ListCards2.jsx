import React, { useContext } from 'react';
import { Context } from '../store/appContext';

//seccion - Hooks =  useContext()
import Cards2 from './Cards2.jsx';

const ListCards2 = () => {
    const { store, actions } = useContext(Context);
        return (
            <>
                { ()=>actions.fetchSwapies2() }
                { store.swapiList2.map( (item, index)=>( <Cards2 key={index} id={index++} data={item}/> )) }
            </>
        )
}

export default ListCards2;
