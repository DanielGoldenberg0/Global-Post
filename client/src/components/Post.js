import React, { Component } from "react"
import "../css/post.css"

class Post extends Component {
  render() {
    return (
      <div className="post">
        <h1 className="post-username">Username</h1>
        <h2 className="post-data">Date</h2>
        <p className="post-message">Message</p>
      </div>
    )
  }
}

export default Post
