import React, { Component } from 'react'
import "./css/index.css"
import Navbar from "./components/Navbar"
import PostContainer from "./components/PostContainer"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <PostContainer/>
      </div>
    )
  }
}

export default App
