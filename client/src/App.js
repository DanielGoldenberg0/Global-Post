import React, { Component } from 'react'
import "./css/index.css"
import Navbar from "./components/Navbar"
import PostContainer from "./components/PostContainer"
import CreatePost from "./components/CreatePost"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <CreatePost/>
        <PostContainer/>
      </div>
    )
  }
}

export default App
