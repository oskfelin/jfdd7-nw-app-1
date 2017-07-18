import React from 'react'
import {
  Col,
  Form,
  Checkbox,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap'

import './login.css'

export default class LogIn extends React.Component {



    render() {
    return (
      <div>
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} smOffset={4} sm={1}>
              Email
            </Col>
            <Col sm={3}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} smOffset={4} sm={1}>
              Password
            </Col>
            <Col sm={3}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col xsOffset={2} xs={10} smOffset={5} sm={7}>
              <Checkbox>Zapamiętaj dane do logowania</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col  smOffset={5} sm={3}>
              <Button id="przycisk" bsStyle="success" type="submit"  block  center-block>
                Zaloguj
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}