import React,{useContext} from 'react';
import ComponentE from './UseContectE';


//Context provide a way to pass data through a component tree without having to pass props down 
//manually

function ComponentC()
{
    return(
        <div>
            <ComponentE/>
        </div>
    )
}

export default ComponentC;