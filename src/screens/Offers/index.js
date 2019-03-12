import React, { Component } from 'react'
import OffersTable from './components/OffersTable'

class Offers extends Component {

  componentDidMount() {
    const { fetchOffers } = this.props
    fetchOffers()
  }
  render () {
    const { offers } = this.props
    return (
      <div>
        <OffersTable rows={offers} />
      </div>
    )
  }
}

export default Offers