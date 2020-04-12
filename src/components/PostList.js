import React ,{ Component } from 'react';
import axios from 'axios'

class PostList extends Component{
    constructor(props)
    {
        super(props)

        this.state=
        {
            posts:[],
            errmess:''
        }
    }

    componentDidMount()
    {
        axios.get('https://corona.lmao.ninja/countries')
        .then(response => 
            {
                console.log(response)
                this.setState({posts:response.data})
            })
        .catch(error => 
            {
                console.log(error)
                this.setState({errmess:'Error Retriving Data'})
            })
    }
    render()
    {
        const { posts,errmess }=this.state
        return(
            <div>
                This is Post List
                {
                    posts.map((post) => 
                    {
                       if(post.country === "India")
                       {
                           return(
                               <div>
                               {post.country}
                               Cases:
                               {post.cases}
                               </div>
                           )
                       }
                       else{
                           return(
                               <div>{errmess}</div>
                           )
                       }
                    })
                }
            </div>
        )
    }
}

export default PostList;