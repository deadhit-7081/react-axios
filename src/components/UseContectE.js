import React,{useContext} from 'react';
import {UserContext , GammingContext} from '../App';


//Context provide a way to pass data through a component tree without having to pass props down 
//manually

function ComponentE()
{
    //useContext return contect value
    const user = useContext(UserContext)
    const game = useContext(GammingContext)
    return(
        <div>
            {user} - {game}
        </div>
    )
}

export default ComponentE;