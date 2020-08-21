import React, { Component } from "react"
import "../css/post.css"
import ProfileImage from "./Image/ProfileImage"

class Post extends Component {
  render() {
    return (
      <div className="post">
        <div>
          <ProfileImage/>
        </div>
        <h1 className="post-username">Username</h1>
        <h2 className="post-date">Date</h2>
        <p className="post-content">Content</p>
      </div>
    )
  }
}

export default Post
