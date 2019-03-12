import React, { Component } from 'react'
import PropTypes from 'prop-types'
import OffersTable from './components/OffersTable'

class Home extends Component {

  componentDidMount() {
    const { fetchOffers } = this.props
    fetchOffers()
  }

  render() {
    const { offers } = this.props
    console.log('-------------', offers)
    return (
      <div>
        <OffersTable rows={offers}/>
      </div>
    )
  }
}

Home.propTypes = {

}
export default Home