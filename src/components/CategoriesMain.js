import React from 'react'
import { Link } from 'react-router-dom'
import {Col, Grid, Image, Label} from 'react-bootstrap'
import './Categories.css'



export default class CategoriesMain extends React.Component {

  render() {
    return (
      <Grid fluid>
        <Grid>
          <Col xs={12} sm={6} lg={4}><Link to="/result-view"><div className="category"><Image src={process.env.PUBLIC_URL + '/images/MobilePhone.jpg'} rounded responsive/><h1><Label>Kategoria 6</Label></h1></div></Link></Col>
          <Col xs={12} sm={6} lg={4}><div className="category"><Image src={process.env.PUBLIC_URL + '/images/MobilePhone.jpg'} rounded responsive/><h1><Label>Kategoria 6</Label></h1></div></Col>
          <Col xs={12} sm={6} lg={4}><div className="category"><Image src={process.env.PUBLIC_URL + '/images/MobilePhone.jpg'} rounded responsive/><h1><Label>Kategoria 6</Label></h1></div></Col>
          <Col xs={12} sm={6} lg={4}><div className="category"><Image src={process.env.PUBLIC_URL + '/images/MobilePhone.jpg'} rounded responsive/><h1><Label>Kategoria 6</Label></h1></div></Col>
          <Col xs={12} sm={6} lg={4}><div className="category"><Image src={process.env.PUBLIC_URL + '/images/MobilePhone.jpg'} rounded responsive/><h1><Label>Kategoria 6</Label></h1></div></Col>
          <Col xs={12} sm={6} lg={4}><div className="category"><Image src={process.env.PUBLIC_URL + '/images/MobilePhone.jpg'} rounded responsive/><h1><Label>Kategoria 6</Label></h1></div></Col>
        </Grid>
      </Grid>
    )
  }
}