import React, { Component } from 'react'
import "./css/index.css"
import Navbar from "./components/Navbar"
import PostContainer from "./components/PostContainer"
import CreatePost from "./components/CreatePost"
import Sidebar from './components/Sidebar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Sidebar/>
        <CreatePost/>
        <PostContainer/>
      </div>
    )
  }
}

export default App
