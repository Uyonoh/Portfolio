import {useState, useEffect} from 'react';
import axios from 'axios';
import Post from './post';
import { Link } from 'react-router-dom';

import '../styles/blog.css'

function PostPreview(props){

    return(
        <div className="post bb flex lt grid-8-4">
			<div>
				<div>
                    <Link to={`/blog/${props.slug}`}>
                        <div className="flex lt">
                            <img src="" alt="" width="20px" height="20px" />
                            <span className="info">{props.section}</span>
                        </div>
                
                        <h2 className="title">{props.title}</h2>
                        <p className="peek">{props.content}</p>
                    </Link>
                </div>
				<div className="flex">
					<div className="flex lt">
						<span>X</span>
						<span>{props.created_at}</span>
						<span>{props.likes}</span>
						<span>{props.comments_count}</span>
					</div>
					<div className="flex rt">
						<span>--</span>
						<span>M</span>
						<span>===</span>
					</div>
				</div>
			</div>
			<div>
				<img src={props.thumbnail} alt="" width="80px" height="120px" />
			</div>
		</div>
    );
}


function Blog() {
    const [posts, setPosts] = useState([]);
    const isLoggedIn = localStorage.getItem("token") !== "";

    useEffect(() => {
    axios.get("http://localhost:8000/api/posts/")
    .then(res => setPosts(res.data))
    .catch(err => console.log(err));
    }, []);


    return(
       <div id="blog" className=''>
         {/* <ul>
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
        </ul> */}

    <nav className="flex lt bb cont">
        <Link to={`/blog/new`}>{isLoggedIn ? <span>+</span> : <span></span>}</Link>
		<span>For you</span>
		<span>Following</span>
		<span> Featured <span className="bggreen">New</span></span>
	</nav>
	
	<section className="posts cont">
		{posts.map(post => (
            <PostPreview
            section={post.section}
            slug={post.slug}
            title={post.title}
            content={post.content}
            created_at={post.formatted_created_at}
            likes={post.likes}
            comments_count={post.comments_count}
            thumbnail={post.thumbnail}
             />
        ))}
	</section>

        {/* <form action="http://localhost:8000/api/posts/" method="post">
            <div className="input title">
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" id="" />
            </div>
            <div className="input content">
                <label htmlFor="content">Content: </label>
                <textarea name="content" id=""></textarea>
            </div>

            <button type="submit">Post</button>

        </form> */}
       </div>
    )
}


export default Blog;
