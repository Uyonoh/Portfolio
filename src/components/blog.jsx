import {useState, useEffect} from 'react';
import axios from 'axios';
import Post from './post';

import '../styles/blog.css'


function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
    axios.get("http://localhost:8000/api/posts/")
    .then(res => setPosts(res.data))
    .catch(err => console.log(err));
    }, []);


    return(
       <div id="blog" className=''>
         <ul>
            {posts.map(post => (
                <Post
                id={post.id}
                img={post.img || ""}
                title={post.title}
                text={post.content}
                username={post.username || "Mobius"}
                likes = {post.likes || 300}
                releaseDate = {post.releaseDate || new Date().toDateString()}

                />
            ))}
        </ul>

        <form action="http://localhost:8000/api/posts/" method="post">
            <div className="input title">
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" id="" />
            </div>
            <div className="input content">
                <label htmlFor="content">Content: </label>
                <textarea name="content" id=""></textarea>
            </div>

            <button type="submit">Post</button>

        </form>
       </div>
    )
}


export default Blog;
