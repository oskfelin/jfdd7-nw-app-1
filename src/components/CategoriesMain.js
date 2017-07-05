import React from 'react'
import { Col } from 'react-bootstrap'

export default class CategoriesMain extends React.Component {

render() {
  return(
    <grid>
      <Col xs={6} md={4}>Kategoria 1</Col>
      <Col xs={6} md={4}>Kategoria 2</Col>
      <Col xs={6} md={4}>Kategoria 3</Col>
      <Col xs={6} md={4}>Kategoria 4</Col>
      <Col xs={6} md={4}>Kategoria 5</Col>
      <Col xs={6} md={4}>Kategoria 6</Col>



    </grid>
  )
}
}