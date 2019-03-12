import React, { Component } from 'react'
import { connect } from 'react-redux'

class FooterContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }
    
    render () {
        return (
            <div>
              
            </div>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FooterContainer);