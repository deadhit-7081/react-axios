import React,{ useState }from 'react';

function HookCounter()
{
    const initialCount=0
    const [count,setCount] = useState(initialCount)
    const incrementfive= () =>
    {
        for(let i=0;i<5;i++)
        {
            setCount(prev => prev+1)
        }
    }
    return(
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
            <button onClick={incrementfive}>Increnmentfive</button>
        </div>
    )
}

export default HookCounter;