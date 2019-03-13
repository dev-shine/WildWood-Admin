import React, { Component } from 'react'
import OffersTable from './components/OffersTable'

class Offers extends Component {

  componentDidMount() {
    const { fetchOffers } = this.props
    fetchOffers()
  }
  deleteOffer = (id) => {
    const { deleteOffer } = this.props
    console.log('-----------', id)
    deleteOffer(id)
  }
  render () {
    const { offers } = this.props
    return (
      <div>
        <OffersTable rows={offers} deleteOffer={this.deleteOffer}/>
      </div>
    )
  }
}

export default Offers