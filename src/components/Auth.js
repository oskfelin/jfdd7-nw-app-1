import React from 'react'
import { connect } from 'react-redux'
import LogIn from './LogIn'
// import SignUpForm from './SignUpForm'

const Auth = ({ user, children }) => (
  user !== null ?
    children :
    <div>
      <LogIn/>
      {/*<SignUpForm/>*/}
    </div>
)

export default connect(
  state => ({
    user: state.auth.user
  })
)(Auth)