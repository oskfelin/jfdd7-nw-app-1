import React from 'react'

import {Grid, Col, Row, Carousel, Well, Button, Tab, Tabs} from 'react-bootstrap'

import './ProductPageView.css'

export default class ProductPageView extends React.Component {


  render() {
    console.log(this.props)

    return (
      <Grid>
        <Row>
          <Col xs={4}>
            <Carousel>
              <Carousel.Item>
                <img width={400} alt="" src={process.env.PUBLIC_URL + '/images/spinner1.jpg'}/>
              </Carousel.Item>
              <Carousel.Item>
                <img width={400} alt="" src={process.env.PUBLIC_URL + '/images/spinner2.jpg'}/>
              </Carousel.Item>
              <Carousel.Item>
                <img width={400} alt="" src={process.env.PUBLIC_URL + '/images/spinner3.jpg'}/>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={8}>
            <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
              <Tab eventKey={1} title="Opis produktu">
                Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1 content Tab 1
                content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1 contentTab 1 content
                Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1 contentTab 1 content Tab 1
                content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1 contentTab 1 content Tab 1 content
                Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1 contentTab 1 content Tab 1 content Tab 1
                content Tab 1 content Tab 1 content Tab 1 contentTab 1 content
              </Tab>
              <Tab eventKey={2} title="Opinie">
                Tab 2 content Tab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2
                content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1
                contentTab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1
                contentTab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1
                contentTab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1
                contentTab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1 content
              </Tab>
              <Tab eventKey={3} title="Tab 3">
                Tab 3 content Tab 3 contentTab 3 contentTab 3 contentTab 3 contentTab 3 contentTab 3 contentTab 3
                content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1
                contentTab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1
                contentTab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1
                contentTab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1
                contentTab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1 content
              </Tab>
            </Tabs>
          </Col>
          <Col xs={12} className="shop">
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