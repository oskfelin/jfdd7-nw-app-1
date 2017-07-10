import React from 'react'

import {
  Grid
} from 'react-bootstrap'


import './Result.css'



const Result = (props) => (
  <div className="Result">
    <Row>
        <div> Search Photo </div>

        <div>
            <h1>Name</h1>
            <button>INFO</button>
        </div>

        <div>Price</div>

    </Row>
  </div>

)

export default Result