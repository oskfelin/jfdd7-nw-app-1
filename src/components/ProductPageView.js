import React from 'react'

import {Grid, Col, Row, Image, ListGroup, ListGroupItem, Carousel} from 'react-bootstrap'

export default class ProductPageView extends React.Component {


  render() {
    console.log(this.props)

    return (
      <Grid fluid>
        <Row>
          <Col xs={6}>
            {/*<Image src={process.env.PUBLIC_URL + '/img/spinner.jpg'} responsive/>*/}
            <Carousel>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src={process.env.PUBLIC_URL + '/img/spinner1.jpg'}/>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src={process.env.PUBLIC_URL + '/img/spinner2.jpg'}/>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src={process.env.PUBLIC_URL + '/img/spinner3.jpg'}/>
              </Carousel.Item>
            </Carousel>
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