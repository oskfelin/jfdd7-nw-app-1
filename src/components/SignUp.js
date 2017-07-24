import React from 'react'
import firebase from 'firebase'
import {connect} from 'react-redux'
import {syncUser} from '../state/auth'
import {
  Col,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Grid
} from 'react-bootstrap'

class SignUp extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.password
    )
  }

  render() {
    return (
      <Grid fluid>

          <p className="main-window">Zarejestruj się</p>
          <Form horizontal className="datalog"
                onSubmit={this.handleSubmit}>
            <FormGroup controlId="formHorizontalEmail" className="text-form">
              <Col componentClass={ControlLabel} smOffset={2} sm={1} lgOffset={4} lg={1}>
                <span className="form-desription"> Email</span>
              </Col>
              <Col sm={6} lg={2}>
                <FormControl placeholder="Email"
                             type="text"
                             value={this.state.email}
                             onChange={this.handleEmailChange}
                />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} smOffset={3} sm={1} lgOffset={4} lg={1}>
                <span className="form-desription"> Password</span>
              </Col>
              <Col sm={4} lg={2}>
                <FormControl
                  placeholder="Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={4} sm={4} lgOffset={5} lg={2}>
                <Button id="przycisk" bsStyle="primary" type="submit" block center-block>
                  Zaloguj
                </Button>
              </Col>
            </FormGroup>
          </Form>

        </Grid>
    )
  }
}

export default connect(
  null,
  dispatch => ({
    syncUser: (user) => dispatch(syncUser(user))
  })
)(SignUp)