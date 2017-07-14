import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import uniqBy from 'lodash.uniqby'
import {
  Col,
  Row,
  Grid
} from 'react-bootstrap'
import './ResultsView.css'
import {fetchShops} from '../state/shops'
import ResultsFilter from './ResultsFilter'

export default connect(
  state => ({
    shops: state.shops,
    searchPhrase: state.searchEngine.searchPhrase,
    activeFilter: state.searchEngine.activeFilterName,
    activeFilterNames: state.productFilters.activeFilterNames
  }),
  dispatch => ({
    fetchShops: () => dispatch(fetchShops())
  })
)(
  class ResultsView extends React.Component {

    componentWillMount() {
      this.props.fetchShops()
    }


    render() {
      const {data, fetching, error} = this.props.shops
      const shops = data === null ? [] : data
      const filters = {
        name_iphone: product => product.name === 'Iphone',
        name_lenovo: product => product.name === 'Lenovo',
        name_xiaomi: product => product.name === 'Xiaomi',
      }
      const allProducts = shops.map(
        shop => shop.products.map(product => ({...product, shopName: shop.name}))
      ).reduce(
        (total, next) => total.concat(next), []
      )
      const uniqueProducts = uniqBy(allProducts, 'name')

      return (
        <div className="Result">
          <Grid>
            <Row>
              <Col sm={3}>
                <ResultsFilter/>
              </Col>
              <Col sm={9}>

                { error === null ? null : <p>{error.message}</p> }
                { fetching === false ? null : <p>Fetching data...</p>}
                {
                  uniqueProducts.filter(
                    product => product.name.includes(this.props.searchPhrase)
                  ).filter(
                    product => product.category === this.props.activeFilter
                  ).filter(
                    product => this.props.activeFilterNames.map(
                      filterName => filters[filterName] || (() => true)
                    ).every(
                      f => f(product) === true
                    )
                  ).sort(
                    (a, b) => a.price > b.price
                  ).map(
                    product => (
                      <Link to={'/product-page-view/' + product.name}>

                      <Row className="ResultItem">
                        <Col sm={2} className="resultPhoto">
                          <div>{product.shopName}
                            <img width={500} alt=""
                                 src={process.env.PUBLIC_URL + '/images/smartphones/' + product.name + '.jpg'}/></div>
                        </Col>
                        <Col sm={7}>
                          <div>
                            <h1 className="resultName">{product.name} </h1>
                          </div>
                        </Col>
                        <Col sm={3} className="resultPrice">
                          <div>{product.price + ' zł'}</div>
                            <button className="resultButton">INFO</button>

                        </Col>
                      </Row>
                      </Link>
                    )
                  )
                }
              </Col>
            </Row>
          </Grid>
        </div>
      )
    }
  }
)