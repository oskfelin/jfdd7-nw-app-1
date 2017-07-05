import React from 'react'
import {FormGroup, FormControl, Form, ControlLabel, Button, Col} from 'react-bootstrap'

export default class SearchMain extends React.Component {

  render() {
    return (
      <Form inline bsClass="col-xs-12">
       <FormGroup bsClass="col-md-8" controlId="formInlineName">
           <FormControl type="text" placeholder="Jane Doe" />
        </FormGroup>
      <Button bsClass="col-md-4" type="submit">
          Send invitation
        </Button>
      </Form>
  )

  }

}