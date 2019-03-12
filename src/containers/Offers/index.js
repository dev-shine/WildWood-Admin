import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
    fetchOffers
} from '../../actions/offers';

import Offers from '../../screens/Offers'

class OffersContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }
    render () {
        return (
            <Offers {...this.props}/>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        offers: state.offers.offers
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchOffers: () => {
            dispatch(fetchOffers())
        },
    };
}   

export default connect(mapStateToProps, mapDispatchToProps)(OffersContainer);