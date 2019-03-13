import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
    fetchOffers,
    deleteOffer,
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
        deleteOffer: id => {
            dispatch(deleteOffer(id))
        }
    };
}   

export default connect(mapStateToProps, mapDispatchToProps)(OffersContainer);