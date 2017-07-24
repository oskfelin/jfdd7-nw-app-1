import React from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'

import CSSTransitionGroup from 'react-addons-css-transition-group'

import './AuthFormWrapper.css'

class AuthFormWrapper extends React.Component {

  state = {
    showSignUp: false
  }


  render() {
    return (
      <div>
        <LogIn/>
        <div className="main" onClick={() => this.setState({ showSignUp: !this.state.showSignUp })}>
          <p className="main-info">Nie masz jeszcze konta ? <br />Utworz je w 10 sekund!</p>
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