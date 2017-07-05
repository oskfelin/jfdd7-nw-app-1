import React from 'react'
import { Panel, Col } from 'react-bootstrap'

export default class ProductPageView extends React.Component {

  render() {
    return (
      <div>
        <Col xs={12} md={6}>
        <Panel header={<h3>Panel title</h3>} bsStyle="primary">
          Panel content
        </Panel>
        </Col>
      </div>
    )
  }
}