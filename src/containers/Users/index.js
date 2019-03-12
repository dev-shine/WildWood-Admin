import React, { Component } from 'react'
import { connect } from 'react-redux'

import Users from '../../screens/Users'

class UsersContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }
    render () {
        return (
            <Users {...this.props}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);