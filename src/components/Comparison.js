import React from 'react'
import {connect} from 'react-redux'
import uniqBy from 'lodash.uniqby'
import {toggle} from '../state/comparedProducts'
import {Table, Grid} from 'react-bootstrap'

export default connect(
  state => ({
    productsIds: state.comparedProducts.productsIds,
    shops: state.shops
  }),
  dispatch => ({
    toggleCompare: id => dispatch(toggle(id)),

  })
)(
  class Comparison extends React.Component {

    render() {
      const {data} = this.props.shops

      if (data === null) {
        return <p>Wczytywanie...</p>
      }



      const dataToDisplay = data.map(
        shop => shop.products
      ).reduce(
        (total, next) => total.concat(next), []
      ).filter(
        product => this.props.productsIds.includes(product.id)
      )

      if (dataToDisplay.length === 0) {
        return <p>Brak produktów do porównania</p>
      }

      const attributes = Object.keys(dataToDisplay[0])
console.log(dataToDisplay)
      return (
        <Grid>
          <Table striped bordered condensed hover>
            <tbody>
            {
              attributes.map(
                attribute => ({
                  name: attribute,
                  uniqueValues: uniqBy(dataToDisplay, attribute).length
                })
              ).sort(
                (a, b) => a.uniqueValues - b.uniqueValues
              ).map(
                attribute => (
                  <tr style={{background: attribute.uniqueValues === 1 ? 'lightgreen' : '#FF5659'}}>
                    <td>{attribute.name}</td>
                    {
                      dataToDisplay.map(
                        product => (
                          <td>{product[attribute.name]}</td>
                        )
                      )
                    }
                  </tr>
                )
              )
            }
            </tbody>
          </Table>
        </Grid>
      )
    }

  }
)
