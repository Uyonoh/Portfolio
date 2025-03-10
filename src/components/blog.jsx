import {useState, useEffect} from 'react';
import axios from 'axios';
import Post from './post';


function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
    axios.get("http://localhost:8000/api/posts/")
    .then(res => setPosts(res.data))
    .catch(err => console.log(err));
    }, []);


    return(
       <div className='py-5'>
         <ul>
    {posts.map(post => (
        <li key={(post.id)}>{post.title}</li>
    ))}
    </ul>
       </div>
    )
}


export default Blog;
