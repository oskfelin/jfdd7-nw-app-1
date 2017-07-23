import React from 'react'
import { connect } from 'react-redux'
import LogIn from './LogIn'
import SignUp from './SignUp'
import {
  Button,
} from 'react-bootstrap'

import './auth.css'

const Auth = ({ user, children }) => (
  user !== null ?
    children :
    <div className="container-first-page">
      <LogIn/>
      <SignUp/>
    </div>
)

export default connect(
  state => ({
    user: state.auth.user
  })
)(Auth)
