import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router,IndexRoute, Route, browserHistory } from 'react-router';

import Home from './ui/Home';
import About from './ui/About';
import App from './ui/App';
import Case from './ui/Case';

// export const Routes = () => (
//    	<Router history={browserHistory}>
// 	    <Route path='/' component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/case" component={Case} />
//   	</Router>
// );

class RenderRoute extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    	return (
    		<Router history={browserHistory}>
			    <Route path='/' component={App}>
			        <IndexRoute component={Home} />
			        <Route path="/about" component={About} />
			        <Route path="/case" component={Case} />
			    </Route>
		  	</Router>
    	)	
    }
}

export default RenderRoute;
