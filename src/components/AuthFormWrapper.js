import React from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'

class AuthFormWrapper extends React.Component {

  state = {
    showSignUp: false
  }

  render() {
    return (
      <div>
        <LogIn/>
        <div className="main" onClick={() => this.setState({ showSignUp: true })}>
          <p className="main-info">Nie masz jeszcze konta ? <br />Utworz je w 10 sekund!</p>
        </div>
        {
          this.state.showSignUp === false ? null : <SignUp/>
        }
      </div>
    )
  }
}

export default AuthFormWrapper