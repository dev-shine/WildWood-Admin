import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

      </div>
    )
  }
}

Home.propTypes = {

}
export default Home