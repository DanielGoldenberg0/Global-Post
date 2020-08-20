import React, { Component } from "react"
import Post from "./Post"
import "../css/post.css"

class PostContainer extends Component {
	render() {
		return (
			<div id="post-container">
				<Post/>
				<Post/>
				<Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
			</div>
		)
	}
}

export default PostContainer
