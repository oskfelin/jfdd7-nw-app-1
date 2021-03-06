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
      <div className="first-page">
        <div className="main-window">
          <div>
            <LogIn/>
            <div onClick={() => this.setState({showSignUp: !this.state.showSignUp})}>
              <p className="btn-signup">Nie posiadasz konta? - kliknij tutaj</p>
            </div>
            <CSSTransitionGroup transitionName="example">
              {
                this.state.showSignUp === false ? null : <SignUp/>
              }
            </CSSTransitionGroup>

          </div>
        </div>
      </div>
    )
  }
}

export default AuthFormWrapper