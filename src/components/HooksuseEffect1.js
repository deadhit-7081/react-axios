import React , {useState,useEffect} from 'react';

function HooksCounterOneUseEffect()
{
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')

    //useEffect run after every render of the component
    //for conditionally render the useEffect,second parameter is passed as array which contains 
    //props or state that we need to watch
    useEffect(() =>
    {
        console.log('Rendered');
        document.title = `You Clicked ${count} times`
    },[count])
    return(
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={() => setCount(count+1)}>Click : {count}</button>
        </div>
    )
}

export default HooksCounterOneUseEffect;