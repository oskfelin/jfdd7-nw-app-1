import React from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'

import CSSTransitionGroup from 'react-addons-css-transition-group'
import './firstpage.css'
import './AuthFormWrapper.css'

class AuthFormWrapper extends React.Component {

  state = {
    showSignUp: false
  }


  render() {
    return (
      <div>
        <div className="background-window">
        <LogIn/>
        <div className="main" onClick={() => this.setState({ showSignUp: !this.state.showSignUp })}>
          <span className="btn-singup">Nie posiadasz konta?</span>
        </div>
      </div>
        <CSSTransitionGroup transitionName="example">
        {
          this.state.showSignUp === false ? null : <SignUp/>
        }
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default AuthFormWrapper