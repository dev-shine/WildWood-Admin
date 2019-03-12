import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
    fetchOffers
} from '../../actions/home';

import Home from '../../screens/Home'

class HomeContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }
    render () {
        return (
            <Home {...this.props}/>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        offers: state.home.offers
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchOffers: () => {
            dispatch(fetchOffers())
        },
    };
}   

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);