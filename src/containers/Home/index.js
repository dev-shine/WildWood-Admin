import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

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
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       
    };
}   

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer));