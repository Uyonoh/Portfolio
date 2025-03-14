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
        <section class="mid flex ct">
		<div class="post-head">
			<h1 class="title">{post.title}</h1>
			<h2 class="subtitle grey">{post.subtitle}</h2>
			<div class="flex lt info">
				<div class="profile 2img">
					<img src=""  alt="" class="round" />
				</div>
				<div class="">
					<p>{post.author?.name} . <span class="grey">Solo</span></p> 
					<p><span class="grey">Published in </span> {post.section} . <span class="grey">11 min read</span> . <span class="grey">{post.formatted_created_at}</span></p>
				</div>
			</div>
			<div class="metrics flex by">
				<div class="flex lt">
					<span>{post.likes}</span>
					<span>{post.comments}</span>
				</div>
				<div class="flex rt">
					<span>+</span>
					<span>listen</span>
					<span>share</span>
				</div>
			</div>
		</div>
		
		<figure class="post-img">
			<img src={post.thumbnail} alt="" width="600px" height="500px" />
			<figcaption class="grey">Me After using Automation Scripts vs Me Before — AI Generate Images using Microsoft Copilot</figcaption>
		</figure>
		
		<div class="post-body">
			<p>
			{post.content}
			</p>
		</div>
	</section>
    );
}

export default Post;