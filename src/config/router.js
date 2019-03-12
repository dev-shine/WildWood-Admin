import React, { Component } from 'react';
import {
    Route,
    Switch
} from 'react-router';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import Home from '../containers/Home';
import About from '../containers/About'
import NotFound from '../containers/NotFound'
import SignIn from '../containers/SignIn'
import SignUp from '../containers/SignUp'

class RouterComponent extends Component {
    render () {
        const { isLoggedIn } = this.props;
        return (
            <div>
            {
                isLoggedIn &&
                <Home />
            }
            {
                !isLoggedIn &&
                <Switch>
                    <Route path="/" exact component={SignIn} />
                    <Route path="*" component={SignIn} />
                </Switch>
            }
            </div>
        );
    }
}
const mapStateToProps = state => ({
    isLoggedIn: state.authentication.isLoggedIn,
});

const mapDispatchToProps = () => ({

});
export default withRouter(connect(mapStateToProps,  mapDispatchToProps )(RouterComponent));
