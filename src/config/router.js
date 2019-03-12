import React, { Component } from 'react';
import {
    Route,
    Switch
} from 'react-router';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import Home from '../containers/Home';
import About from '../containers/About'
import NotFound from '../containers/NotFound'
import SignIn from '../containers/SignIn'
import SignUp from '../containers/SignUp'

class RouterComponent extends Component {
    render () {
        return (
            <div style={{ height: '100vh', display: 'flex' }}>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/notfound" component={NotFound}/>
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default RouterComponent;
