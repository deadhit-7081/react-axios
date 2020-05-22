import React ,{useState} from 'react';

//useState with object

function HooksCounterThree()
{
    const [name,setname] = useState({fname:'',lname:''})
    return(
        <div>
            <form>
                <input type="text" value={name.fname} onChange={e => setname({...name , fname : e.target.value})}/>
                <input type="text" value={name.lname} onChange={e => setname({...name,lname : e.target.value})}/>
                <h2>fname : {name.fname}</h2>
                <h2>lname : {name.lname}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

export default HooksCounterThree;