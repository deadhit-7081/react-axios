import React , {useState,useEffect} from 'react';

function HooksCounterOneUseEffect()
{
    const [count,setCount] = useState(0)


    //useEffect run after every render of the component
    useEffect(() =>
    {
        document.title = `You Clicked ${count} times`
    })
    return(
        <div>
            <button onClick={() => setCount(count+1)}>Click : {count}</button>
        </div>
    )
}

export default HooksCounterOneUseEffect;