import React from 'react'

import {Grid, Col, Row, Carousel, Tab, Tabs, Panel, Table} from 'react-bootstrap'

import './ProductPageView.css'

export default class ProductPageView extends React.Component {


  render() {
    console.log(this.props)

    return (
      <Grid>
        <Row>
          <Col xs={12} sm={6}>
            <Carousel>
              <Carousel.Item>
                <img width={500} alt="" src={process.env.PUBLIC_URL + '/images/spinner1.jpg'}/>
              </Carousel.Item>
              <Carousel.Item>
                <img width={500} alt="" src={process.env.PUBLIC_URL + '/images/spinner2.jpg'}/>
              </Carousel.Item>
              <Carousel.Item>
                <img width={500} alt="" src={process.env.PUBLIC_URL + '/images/spinner3.jpg'}/>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={12} sm={6}>
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
              <Tab eventKey={1} title="Cechy produktu">
                <Table striped bordered condensed hover>
                  <tbody>
                  <tr>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>Table cell</td>
                  </tr>
                  </tbody>
                </Table>
              </Tab>
              <Tab eventKey={2} title="Opis produktu">
                Tab 2 content Tab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2 contentTab 2
                content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1
                contentTab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1
                contentTab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1
                contentTab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1
                contentTab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1 content
              </Tab>
              <Tab eventKey={3} title="Opinie">
                Tab 3 content Tab 3 contentTab 3 contentTab 3 contentTab 3 contentTab 3 contentTab 3 contentTab 3
                content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1
                contentTab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1
                contentTab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1
                contentTab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1
                contentTab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 content Tab 1 contentTab 1 content
              </Tab>
            </Tabs>
          </Col>
          <Col xs={12}>
            <p className="oferts">Najlepsze oferty znalezione przez nasz serwis</p>
            <Panel>
              <Col xs={4}>
                <div>Cena produktu</div>
              </Col>
              <Col xs={4}>
                <div>Lokalizacja</div>
              </Col>
              <Col xs={4}>
                <div>Nazwa sklepu</div>
              </Col>
            </Panel>
            <Panel>
              <Col xs={4}>
                <div>Cena produktu</div>
              </Col>
              <Col xs={4}>
                <div>Lokalizacja</div>
              </Col>
              <Col xs={4}>
                <div>Nazwa sklepu</div>
              </Col>
            </Panel>
            <Panel>
              <Col xs={4}>
                <div>Cena produktu</div>
              </Col>
              <Col xs={4}>
                <div>Lokalizacja</div>
              </Col>
              <Col xs={4}>
                <div>Nazwa sklepu</div>
              </Col>
            </Panel>
            <Panel>
              <Col xs={4}>
                <div>Cena produktu</div>
              </Col>
              <Col xs={4}>
                <div>Lokalizacja</div>
              </Col>
              <Col xs={4}>
                <div>Nazwa sklepu</div>
              </Col>
            </Panel>
            <Panel>
              <Col xs={4}>
                <div>Cena produktu</div>
              </Col>
              <Col xs={4}>
                <div>Lokalizacja</div>
              </Col>
              <Col xs={4}>
                <div>Nazwa sklepu</div>
              </Col>
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }
}