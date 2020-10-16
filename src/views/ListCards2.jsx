import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Button } from 'react-bootstrap';

//seccion - Hooks =  useContext()
import Cards2 from './Cards2.jsx';

const ListCards2 = () => {
    const { store, actions } = useContext(Context);
        return (
            <>
                <Button variant="outline-light" onClick={ ()=>actions.fetchSwapies2() }></Button>
                {
                    store.swapiList2.map( (item, index)=>( <Cards2 key={index} ir={index++} data={item}/> ))
                    
                }
            </>
        )
}

export default ListCards2;
