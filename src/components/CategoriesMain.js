import React from 'react'

import {Col, Grid, Image} from 'react-bootstrap'
import './Categories.css'

export default class CategoriesMain extends React.Component {

  render() {
    return (
      <Grid fluid>
        <Grid>
          <Col xs={12} sm={6} lg={4}><div className="category"><Image src={process.env.PUBLIC_URL + '/images/MobilePhone.jpg'} rounded responsive/><p>Kategoria 6</p></div></Col>
          <Col xs={12} sm={6} lg={4}><div className="category"><Image src={process.env.PUBLIC_URL + '/images/MobilePhone.jpg'} rounded responsive/><p>Kategoria 6</p></div></Col>
          <Col xs={12} sm={6} lg={4}><div className="category"><Image src={process.env.PUBLIC_URL + '/images/MobilePhone.jpg'} rounded responsive/><p>Kategoria 6</p></div></Col>
          <Col xs={12} sm={6} lg={4}><div className="category"><Image src={process.env.PUBLIC_URL + '/images/MobilePhone.jpg'} rounded responsive/><p>Kategoria 6</p></div></Col>
          <Col xs={12} sm={6} lg={4}><div className="category"><Image src={process.env.PUBLIC_URL + '/images/MobilePhone.jpg'} rounded responsive/><p>Kategoria 6</p></div></Col>
          <Col xs={12} sm={6} lg={4}><div className="category"><Image src={process.env.PUBLIC_URL + '/images/MobilePhone.jpg'} rounded responsive/><p>Kategoria 6</p></div></Col>
        </Grid>
      </Grid>
    )
  }
}