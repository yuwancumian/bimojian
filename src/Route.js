import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router,IndexRoute, Route, browserHistory } from 'react-router';

import Home from './ui/Home';
import About from './ui/About';
import App from './ui/App';
import Classic from './ui/Classic';
import CaseCont from './ui/CaseCont';
import Message from './ui/Message';
import BlogContent from './ui/BlogContent';
import Search from './ui/Search';

const RenderRoute = React.createClass({
    render() {
        return (
            <Router history={ browserHistory }>
                <Route path='/' component = { App }>
                    <IndexRoute component = { Home } />
                    <Route path ="/about" component = { About } />
                    <Route path ="/classic" component = { Classic } />
                    <Route path = "/classic/:id" component = { CaseCont } />
                    <Route path ="/search" component = { Search } />
                </Route>
            </Router>
        )
    }
});

export default RenderRoute;
