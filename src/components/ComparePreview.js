import React from 'react'
import './ComparePreview.css'
import {Well, Grid, Col, Row, Carousel, Tab, Tabs, Panel, Table} from 'react-bootstrap'

export default class ComparePreview extends React.Component {

  render() {
    return (
      <Grid>
        <Col xs={8} xsOffset={2}>
          <Panel className="compare-prev">
            <Col xs={12}>
              <h4>Produkty do porównania</h4>
            </Col>
            <Col xs={3}>
              <img width={50} alt="" src={process.env.PUBLIC_URL + '/images/smartphones/HTC.jpg'}/>
            </Col>
            <Col xs={3}>
              <p>Nazwa produktu</p>
            </Col>
            <Col xs={3}>
              <img width={50} alt="" src={process.env.PUBLIC_URL + '/images/smartphones/HTC.jpg'}/>
            </Col>
            <Col xs={3}>
              <p>Nazwa produktu</p>
            </Col>
          </Panel>
        </Col>
      </Grid>
    )
  }
}