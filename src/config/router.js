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

class RouterComponent extends Component {
    render () {
        return (
            <div style={{ height: '100vh', display: 'flex' }}>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/notfound" component={NotFound}/>
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default RouterComponent;
