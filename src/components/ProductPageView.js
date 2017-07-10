import React from 'react'

import {Grid, Col, Row, ListGroup, ListGroupItem, Carousel, Well, Button, Tab, Tabs} from 'react-bootstrap'

export default class ProductPageView extends React.Component {


  render() {
    console.log(this.props)

    return (
      <Grid>
        <Row>
          <Col xs={6}>
            <Carousel>
              <Carousel.Item>
                <img width={600} height={200} alt="600x200" src={process.env.PUBLIC_URL + '/img/spinner1.jpg'}/>
              </Carousel.Item>
              <Carousel.Item>
                <img width={600} height={200} alt="600x200" src={process.env.PUBLIC_URL + '/img/spinner2.jpg'}/>
              </Carousel.Item>
              <Carousel.Item>
                <img width={600} height={200} alt="600x200" src={process.env.PUBLIC_URL + '/img/spinner3.jpg'}/>
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
          <Col xs={6}>
            <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
              <Tab eventKey={1} title="Opis produktu">
                Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1 content
              </Tab>
              <Tab eventKey={2} title="Opinie">
                Tab 2 content Tab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 content
              </Tab>
              <Tab eventKey={3} title="Tab 3">
                Tab 3 content Tab 3 contentTab 3 contentTab 3 contentTab 3 contentTab 3 contentTab 3 contentTab 3 content
              </Tab>
            </Tabs>
          </Col>
          <Col xs={12}>
            <Well>
              <Button>Przejdź do sklepu</Button>
            </Well>
            <Well>
              <Button>Przejdź do sklepu</Button>
            </Well>
            <Well>
              <Button>Przejdź do sklepu</Button>
            </Well>
            <Well>
              <Button>Przejdź do sklepu</Button>
            </Well>
            <Well>
              <Button>Przejdź do sklepu</Button>
            </Well>
            <Well>
              <Button>Przejdź do sklepu</Button>
            </Well>
            <Well>
              <Button>Przejdź do sklepu</Button>
            </Well>
            <Well>
              <Button>Przejdź do sklepu</Button>
            </Well>
            <Well>
              <Button>Przejdź do sklepu</Button>
            </Well>
            <Well>
              <Button>Przejdź do sklepu</Button>
            </Well>
            <Well>
              <Button>Przejdź do sklepu</Button>
            </Well>
          </Col>
        </Row>
      </Grid>
    )
  }
}