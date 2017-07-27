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
        <p className="text-form">Rejestracja</p>
        <Form horizontal className="datalog"
              onSubmit={this.handleSubmit}>
          <FormGroup controlId="formHorizontalEmail" className="text-form">
            <Col componentClass={ControlLabel} sm={3}>
              <span className="form-desription">E-mail</span>
            </Col>
            <Col sm={6}>
              <FormControl
                type="text"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={3}>
              <span className="form-desription">Hasło</span>
            </Col>
            <Col sm={6}>
              <FormControl
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={4} sm={4}>
              <Button className="btns-firstpage" bsStyle="primary" type="submit" block center-block>
                Zarejestruj
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