import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import CardBox from './components/CardBox';
import QueueAnim from 'rc-queue-anim';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
    	return (
	        <div className="home" >
                <CardBox >
                    <QueueAnim  interval={1000} duration={[2000,2000]} ease={['easeInSine']} className="home-list">
                        <li key="1"><img src={require('../images/home-01.png')} alt="" /></li>
                        <li key="2"><img src={require('../images/home-02.png')} alt="" /></li>
                        <li key="3"><img src={require('../images/home-03.png')} alt="" /></li>
                        <li key="4"><img src={require('../images/home-01.png')} alt="" /></li>
                        <li key="5"><img src={require('../images/home-02.png')} alt="" /></li>
                        <li key="6"><img src={require('../images/home-03.png')} alt="" /></li>
                    </QueueAnim>
                </CardBox>
	        </div>
    	)
    }
}

export default Home;
