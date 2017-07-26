import React from 'react'
import {connect} from 'react-redux'
import {
  ButtonGroup,
  DropdownButton,
  MenuItem
} from 'react-bootstrap'


import './ResultsFilter.css'
import {fetchShops} from '../state/shops'
import {activateFilter} from '../state/productFilters'
import { updatePrice } from '../state/searchFilters'

import {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';

import filterNames from '../_utils/filterNames'

export default connect(
  state => ({
    shops: state.shops,
    price: state.searchFilters.price,
    activeFilter: state.searchEngine.activeFilterName,
    activeFilterNames: state.productFilters.activeFilterNames,
  }),
  dispatch => ({
    fetchShops: () => dispatch(fetchShops()),
    activateFilter: (key) => dispatch(activateFilter(key)),
    updatePrice: (price) => dispatch(updatePrice(price))
  })
)(
  class ResultFilter extends React.Component {

    componentWillMount() {
      this.props.fetchShops()
    }

    render() {

      const selectedNameFilter = this.props.activeFilterNames.find(
        name => filterNames[name] !== undefined && name.indexOf('name') === 0
      )

      const selectedShopNameFilter = this.props.activeFilterNames.find(
        shop => filterNames[shop] !== undefined && shop.indexOf('shopName') === 0
      )

      const selectedCameraFilter = this.props.activeFilterNames.find(
        camera => filterNames[camera] !== undefined && camera.indexOf('camera') === 0
      )

      const selectedSDslotFilter = this.props.activeFilterNames.find(
        slot => filterNames[slot] !== undefined && slot.indexOf('slot') === 0
      )


      return (
        <div className="ResultFilter">

          <ButtonGroup vertical block>
            <DropdownButton title={selectedNameFilter ? filterNames[selectedNameFilter] : 'Producent'}
                            id="bg-vertical-dropdown-1"
                            onSelect={key => this.props.activateFilter(key)}>

              {
                Object.entries(filterNames).filter(
                  ([key]) => key.indexOf('name') === 0
                ).map(
                  ([key, value]) => (
                    <MenuItem eventKey={key}>{value}</MenuItem>
                  )
                )
              }
            </DropdownButton>

            <DropdownButton title={selectedShopNameFilter ? filterNames[selectedShopNameFilter] : 'Sklep'}
                            id="bg-vertical-dropdown-2"
                            onSelect={key => this.props.activateFilter(key)} >
              {
                Object.entries(filterNames).filter(
                  ([key]) => key.indexOf('shopName') === 0
                ).map(
                  ([key, value]) => (
                    <MenuItem eventKey={key}>{value}</MenuItem>
                  )
                )
              }

            </DropdownButton>



            <DropdownButton title={selectedCameraFilter ? filterNames[selectedCameraFilter] : 'Aparat'}
                            id="bg-vertical-dropdown-3"
                            onSelect={key => this.props.activateFilter(key)} >
              {
                Object.entries(filterNames).filter(
                  ([key]) => key.indexOf('camera') === 0
                ).map(
                  ([key, value]) => (
                    <MenuItem eventKey={key}>{value}</MenuItem>
                  )
                )
              }

            </DropdownButton>


            <DropdownButton title={selectedSDslotFilter ? filterNames[selectedSDslotFilter] : 'Dodatkowa karta pamięci'}
                            id="bg-vertical-dropdown-4"
                            onSelect={key => this.props.activateFilter(key)}>
              {
                Object.entries(filterNames).filter(
                  ([key]) => key.indexOf('slot') === 0
                ).map(
                  ([key, value]) => (
                    <MenuItem eventKey={key}>{value}</MenuItem>
                  )
                )
              }


            </DropdownButton>



            <DropdownButton title="Przekątna ekranu (cale)" id="bg-vertical-dropdown-5"
                            onSelect={key => this.props.activateFilter(key)}>
              <MenuItem eventKey="size_3p9">3.9</MenuItem>
              <MenuItem eventKey="size_4p2">4.2</MenuItem>
              <MenuItem eventKey="size_4p5">4.5</MenuItem>
              <MenuItem eventKey="size_4p8">4.8</MenuItem>
              <MenuItem eventKey="size_5p1">5.1</MenuItem>
              <MenuItem eventKey="size_5p2">5.2</MenuItem>
              <MenuItem eventKey="size_6">6</MenuItem>
            </DropdownButton>
          </ButtonGroup>

          <div className="slider">
            <p>Zakres cenowy</p>
            <p>{this.props.price[0]} - {this.props.price[1]} zł</p>
            <Range max={1000} value={this.props.price} onChange={this.props.updatePrice}/>
          </div>
        </div>

      )
    }
  }
)
