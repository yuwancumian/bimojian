import React, { Component } from 'react';
import {Link} from 'react-router';
import ToggleButton from './components/ToggleButton';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
    	return (
	        <div>
				<ToggleButton label= "工作" toggleText = "work" className = 'btn-toggle'/>
	        </div>
    	)
    }
}

export default Home;
