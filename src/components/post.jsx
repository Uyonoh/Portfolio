import React from 'react';

function Post(props) {
	return(
		<div id={props.id} className="post">
			<h2 className="post-title">{props.title}</h2>
			<img src={props.img} alt="post" className="post-img" />
			<p className="brief">{props.text}</p>
			<div className="post-foot">
				<p className="username">{props.username}</p>
				<span className="likes">{props.likes}</span>
				<span className="release">{props.releaseDate}</span>
			</div>
		</div>
	)
}

export default Post;
