import React, { Component } from "react"
import "../css/createPost.css"

class CreatePost extends Component {
  render() {
    return (
      <div id="create-post-container" className="box">
        <h1>Create Post</h1>
        <textarea placeholder="Create Post"></textarea>
        <br/>
        <button>Post</button>
      </div>
    )
  }
}

export default CreatePost
