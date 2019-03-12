import React, { Component } from 'react'
import { connect } from 'react-redux'

import Users from '../../screens/Users'
import { 
    fetchUsers
} from '../../actions/users';
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
        users: state.users.users
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchUsers: () => {
            dispatch(fetchUsers())
        },
    };
}   

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);