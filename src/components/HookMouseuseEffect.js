import React ,{useState,useEffect} from 'react';

function HooksMouse()
{
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);

    const logMouseposition = (e) =>
    {
        console.log('Mouse Event');
        setX(e.clientX);
        setY(e.clientY)
    }

    //specifying single empty array means useEffect dosen't depend on the props or state 
    //therefore no need to render again and again , just render once
    useEffect(() =>{
        console.log('Rendered Mouse');
        window.addEventListener('mousemove',logMouseposition)
    },[])
    return(
        <div>
            Hooks X = {x} Y = {y}
        </div>
    )
}

export default HooksMouse;