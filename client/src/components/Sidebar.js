import React, { Component } from 'react'
import "../css/sidebar.css"

export class SideBar extends Component {
  render() {
    return (
      <div id="sidebar-parent">
        <div id="sidebar" class="box">
          <h1 class="box-title">Account</h1>
          <div id="sidebar-container">
            <form>
              <br></br>
              <label>Username</label>
              <input type="text"></input>
              <br></br>
              <br></br>
              <label>Password</label>
              <input type="text"></input>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SideBar
