import React, { Component } from "react"
import "../css/post.css"
import ProfileImage from "./Image/ProfileImage"

class Post extends Component {
  render() {
    return (
      <div className="post box">
        <div className="post-profile-image">
          <ProfileImage/>
        </div>
        <div className="post-info">
          <h1 className="post-username">{this.props.username}</h1>
          <h2 className="post-date">{this.props.date}</h2>
        </div>
        <p className="post-content">{this.props.content}</p>
      </div>
    )
  }
}

export default Post
