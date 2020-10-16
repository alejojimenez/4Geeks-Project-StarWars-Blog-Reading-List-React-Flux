import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Button } from 'react-bootstrap';

//seccion - Hooks =  useContext()
import Cards1 from './Cards1.jsx';

const ListCards1 = () => {
    const { store, actions } = useContext(Context);
        return (
            <>
                <Button variant="outline-light" onClick={ ()=>actions.fetchSwapies1() }></Button>
                {
                    store.swapiList1.map( (item, index)=>( <Cards1 key={index} ir={index++} data={item}/> ))
                    
                }
            </>
        )
}

export default ListCards1;
