import React from 'react'

import {Grid, Col, Row, Image, ListGroup, ListGroupItem} from 'react-bootstrap'

export default class ProductPageView extends React.Component {


  render() {
    console.log(this.props)

    return (
      <Grid>
        <Row>
          <Col xs={6}>
            <Image src={process.env.PUBLIC_URL + '/img/spinner.jpg'} responsive/>
          </Col>
          <Col xs={6}>
            <ListGroup>
              <ListGroupItem>Właściwość 1</ListGroupItem>
              <ListGroupItem>Właściwość 2</ListGroupItem>
              <ListGroupItem>Właściwość 3</ListGroupItem>
              <ListGroupItem>Właściwość 4</ListGroupItem>
              <ListGroupItem>Właściwość 5</ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Grid>
    )
  }
}