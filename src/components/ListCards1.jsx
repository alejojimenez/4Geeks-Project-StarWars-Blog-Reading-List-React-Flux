import React, { useContext } from 'react';
import { Context } from '../store/appContext';

//seccion - Hooks =  useContext()
import Cards1 from './Cards1.jsx';

const ListCards1 = () => {
    const { store, actions } = useContext(Context);
        return (
            <>
                { ()=>actions.fetchSwapies1() }
                { store.swapiList1.map( (item, index)=>( <Cards1 key={index} id={++index} data={item}/> )) }
            </>
        )
}

export default ListCards1;
