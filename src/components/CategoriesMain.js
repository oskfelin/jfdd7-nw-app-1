import React from 'react'
import {Link} from 'react-router-dom'
import {Col, Grid, Image, Label} from 'react-bootstrap'
import './Categories.css'
import {activeFilter} from '../state/searchEngine'
import {connect} from 'react-redux'
export default connect(
  state => ({
    shops: state.shops,
    activeFilterName: state.searchEngine.activeFilterName
  }),
  dispatch => ({
    activateFilter: (key) => dispatch(activeFilter(key))
  })
)(
  class CategoriesMain extends React.Component {

    render() {
      return (
        <Grid fluid>
          <Grid>
            <Col xs={12} sm={6} lg={4}>
              <Link
                title={this.props.activeFilterName}
                onClick={() => this.props.activateFilter('smartphones')}
                to="/result-view">
                <div className="category">
                  <Image src={process.env.PUBLIC_URL + '/images/MobilePhone.jpg'} rounded responsive/>
                  <h1>
                    <Label>Smartfony</Label>
                  </h1>
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <div className="category"><Image src={process.env.PUBLIC_URL + '/images/MobilePhone.jpg'} rounded
                                               responsive/><h1><Label>Comming soon</Label></h1></div>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <div className="category"><Image src={process.env.PUBLIC_URL + '/images/MobilePhone.jpg'} rounded
                                               responsive/><h1><Label>Comming soon</Label></h1></div>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <div className="category"><Image src={process.env.PUBLIC_URL + '/images/MobilePhone.jpg'} rounded
                                               responsive/><h1><Label>Comming soon</Label></h1></div>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <div className="category"><Image src={process.env.PUBLIC_URL + '/images/MobilePhone.jpg'} rounded
                                               responsive/><h1><Label>Comming soon</Label></h1></div>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <div className="category"><Image src={process.env.PUBLIC_URL + '/images/MobilePhone.jpg'} rounded
                                               responsive/><h1><Label>Comming soon</Label></h1></div>
            </Col>
          </Grid>
        </Grid>
      )
    }
  }
)