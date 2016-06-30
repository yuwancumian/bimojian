import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router,IndexRoute, Route, browserHistory } from 'react-router';

import Home from './ui/Home';
import About from './ui/About';
import App from './ui/App';
import Classic from './ui/Classic';
import CaseCont from './ui/CaseCont';
import Message from './ui/Message';
import Blog from './ui/Blog';
import BlogContent from './ui/BlogContent';
import Search from './ui/Search';

// export const Routes = () => (
//    	<Router history={browserHistory}>
// 	    <Route path='/' component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/case" component={Case} />
//   	</Router>
// );


const  RenderRoute= React.createClass({
    render() {
        return (
            <Router history={ browserHistory }>
                <Route path='/' component = { App }>
                    <IndexRoute component = { Home } />
                    <Route path ="/about" component = { About } />
                    <Route path ="/classic" component = { Classic } />
                    <Route path = "/classic/:id" component = { CaseCont } />
                    <Route path ="/blog" component = { Blog } />
                    <Route path = "/blog/:title" component = { BlogContent } />
                    <Route path ="/search" component = { Search } />
                </Route>
            </Router>
        )
    }
});

module.exports = RenderRoute;
