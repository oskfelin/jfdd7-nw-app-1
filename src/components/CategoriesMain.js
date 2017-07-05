import React from 'react'

import {Col, Grid} from 'react-bootstrap'
import './Categories.css'

export default class CategoriesMain extends React.Component {

  render() {
    return (
      <Grid fluid>
        <Grid>
          <Col xs={6} md={4} className="category"><div>Kategoria 1</div></Col>
          <Col xs={6} md={4} className="category"><div>Kategoria 2</div></Col>
          <Col xs={6} md={4} className="category"><div>Kategoria 3</div></Col>
          <Col xs={6} md={4} className="category"><div>Kategoria 4</div></Col>
          <Col xs={6} md={4} className="category"><div>Kategoria 5</div></Col>
          <Col xs={6} md={4} className="category"><div>Kategoria 6</div></Col>
        </Grid>
      </Grid>
    )
  }
}