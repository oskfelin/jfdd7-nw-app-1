import React from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'
import { Grid, Row, Col } from 'react-bootstrap'

import CSSTransitionGroup from 'react-addons-css-transition-group'
import './firstpage.css'
import './AuthFormWrapper.css'

class AuthFormWrapper extends React.Component {

  state = {
    showSignUp: false
  }


  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', minHeight: '100vh'}}>
        <div style={{ display: 'flex', alignSelf: 'center', direction: 'column', background: '#fff'}}>
          <div style={{ minWidth: 300, background: '#000', fontSize: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            Hello <br />
            We are BLAH
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