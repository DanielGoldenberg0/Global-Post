import React, { Component } from "react"
import "../css/createPost.css"

class CreatePost extends Component {
  render() {
    return (
      <div id="create-post-container">
          <div id="create-post-box" className="box">
          <h1 class="box-title">Create Post</h1>
          <textarea placeholder="Create Post"></textarea>
          <br/>
          <button>Post</button>
        </div>
      </div>
    )
  }
}

export default CreatePost
