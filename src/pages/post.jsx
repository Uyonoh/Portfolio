import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import '../styles/blog.css'
import '../styles/post.css'

function Post(){

    const { slug } = useParams(); // Get slug from URL
    const [post, setPost] = useState(null);
  
    useEffect(() => {
      axios.get(`http://localhost:8000/api/posts/${slug}/`)
        .then(response => setPost(response.data))
        .catch(error => console.error("Error fetching post:", error));
    }, [slug]);
  
    if (!post) return <p>Loading...</p>;
    console.log(post)
    return(
        <section className="mid flex ct">
		<div className="post-head">
			<h1 className="title">{post.title}</h1>
			<h2 className="subtitle grey">{post.subtitle}</h2>
			<div className="flex lt info">
				<div className="profile 2img">
					<img src=""  alt="" className="round" />
				</div>
				<div className="">
					<p>{post.author?.name} . <span className="grey">Solo</span></p> 
					<p><span className="grey">Published in </span> {post.section} . <span className="grey">11 min read</span> . <span className="grey">{post.formatted_created_at}</span></p>
				</div>
			</div>
			<div className="metrics flex by">
				<div className="flex lt">
					<span>{post.likes}</span>
					<span>{post.comments}</span>
				</div>
				<div className="flex rt">
					<span>+</span>
					<span>listen</span>
					<span>share</span>
				</div>
			</div>
		</div>
		
		<figure className="post-img">
			<img src={post.thumbnail} alt="" width="600px" height="500px" />
			<figcaption className="grey">Me After using Automation Scripts vs Me Before — AI Generate Images using Microsoft Copilot</figcaption>
		</figure>
		
		<div className="post-body">
			<p>
			{post.content}
			</p>
		</div>
	</section>
    );
}

export default Post;