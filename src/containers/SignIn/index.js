import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignIn from '../../screens/SignIn' 
import {
  signIn
} from '../../actions/authentication'

class SignInContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }

    render () {
        return (
          <div style={{height: '100vh', display: 'flex', alignItems: 'center'}}>
            <SignIn {...this.props}/>
          </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
      isLoggedIn: state.authentication.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      signIn: user => {
        dispatch(signIn(user))
      }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInContainer);