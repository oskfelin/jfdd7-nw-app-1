import React from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'
// import { Grid, Row, Col } from 'react-bootstrap'

import CSSTransitionGroup from 'react-addons-css-transition-group'
import './firstpage.css'
import './AuthFormWrapper.css'

class AuthFormWrapper extends React.Component {

  state = {
    showSignUp: false
  }


  render() {
    return (
      <div className="nowe">
        <div className="nowe2">
          <div className="nowe3">
            <p>Zrób sobie prezent...</p>
          </div>
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