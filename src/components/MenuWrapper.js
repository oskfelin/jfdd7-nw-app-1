import React from 'react'
import {slide as Menu} from 'react-burger-menu'

import './MenuWrapper.css'

export default class MenuWrapper extends React.Component {

  render() {
    return (
      <div id="outer-container">
        <Menu pageWrapId={ "page-wrap" } right outerContainerId={ "outer-container" }>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
        </Menu>
        <main id="page-wrap">
          {this.props.children}
        </main>
      </div>
    );
  }
}