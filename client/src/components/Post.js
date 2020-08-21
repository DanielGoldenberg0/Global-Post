import React, { Component } from "react"
import "../css/post.css"
import ProfileImage from "./Image/ProfileImage"

class Post extends Component {
  render() {
    return (
      <div className="post">
        <div className="post-profile-image">
          <ProfileImage/>
        </div>
        <div className="post-info">
          <h1 className="post-username">DanielG</h1>
          <h2 className="post-date">8/20/20</h2>
        </div>
        <p className="post-content">Sometimes it's the first moment of the day that catches you off guard. That's what Wendy was thinking. She opened her window to see fire engines screeching down the street. While this wasn't something completely unheard of, it also wasn't normal. It was a sure sign of what was going to happen that day. She could feel it in her bones and it wasn't the way she wanted the day to begin.</p>
      </div>
    )
  }
}

export default Post
