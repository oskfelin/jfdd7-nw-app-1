import React from 'react'
import { connect } from 'react-redux'
import LogIn from './LogIn'
import SignUp from './SignUp'
import {
  Button,
} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Auth = ({ user, children }) => (
  user !== null ?
    children :
    <div>
      <LogIn/>

      {/*<Link to="/SignUp" className="login">*/}
        {/*<Button bsStyle="primary" bsSize="large" >SignUp</Button>*/}
      {/*</Link>*/}

      {/*<SignUp/>*/}
    </div>
)

export default connect(
  state => ({
    user: state.auth.user
  })
)(Auth)
