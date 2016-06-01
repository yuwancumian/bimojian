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
                <ToggleButton toggleText = "work"  href='work.html' title='你好'> 工 作 </ToggleButton>
                <ToggleButton toggleText = "work"  href='haha.html'> 哈 哈 </ToggleButton>
	        </div>
    	)
    }
}

export default Home;
