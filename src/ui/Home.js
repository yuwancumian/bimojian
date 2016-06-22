import React, { Component } from 'react';
import {Link} from 'react-router';
import ToggleButton from './components/ToggleButton';
import CardBox from './components/CardBox';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
    	return (
	        <div className="home">
                <CardBox title = "nihao ma ">
                    <img src={require('../images/img322.jpg')} alt="" />
                </CardBox>
	        </div>
    	)
    }
}

export default Home;
