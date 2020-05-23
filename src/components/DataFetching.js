import React ,{useState,useEffect} from 'react';
import axios from 'axios'

function DataFetch()
{
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const [idButtonClick,setIdButtonClick] = useState(1)

    const handleClick = () =>{
        setIdButtonClick(id)
    }

    useEffect(() =>
    {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res);
            setPost(res.data)
        })
        .catch(err => console.log(err))
    },[idButtonClick])
    return(
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div>
                {post.title}
            </div>
        </div>
    )
}

export default DataFetch;