import React from 'react'
import {
  Col,
  Form,
  Checkbox,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Grid
} from 'react-bootstrap'

import './login.css'

export default class LogIn extends React.Component {



    render() {
    return (
      <Grid fluid>
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} smOffset={3} sm={1} lgOffset={4} lg={1}>
              Email
            </Col>
            <Col sm={4} lg={2}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} smOffset={3} sm={1} lgOffset={4} lg={1}>
              Password
            </Col>
            <Col sm={4} lg={2}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={4} sm={4} lgOffset={5} lg={2}>
              <Checkbox>Zapamiętaj dane do logowania</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col  smOffset={4} sm={4} lgOffset={5} lg={2}>
              <Button id="przycisk" bsStyle="success" type="submit"  block  center-block>
                Zaloguj
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Grid>
    )
  }
}
