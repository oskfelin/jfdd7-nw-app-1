import React from 'react'

import {
  Grid,
  Col
} from 'react-bootstrap'

import './Result.css'

const Result = (props) => (
  <div className="Result">
    <Grid>
        <Col sm={2} className="resultBorder">
        <div > Search Photo </div>
        </Col>
         <Col sm={8}>
        <div>
            <h1 className="resultName">Name</h1>

            <button className="resultButton">INFO</button>

        </div>
         </Col>
          <Col sm={2} className="resultBorder">
        <div>Price</div>
          </Col>

    </Grid>
  </div>

)

export default Result