import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import QueueAnim from 'rc-queue-anim';
import {SectionsContainer, Section} from 'react-fullpage';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let options = {
          activeClass:          'active', // the class that is appended to the sections links
          anchors:              ['first','second'], // the anchors for each sections
          arrowNavigation:      true,// use arrow keys
          className:            'SectionContainer', // the class name for the section container
          delay:                1000, // the scroll animation speed
          navigation:           true, // use dots navigatio
          scrollBar:            false, // use the browser default scrollbar
          sectionClassName:     'Section', // the section class name
          sectionPaddingTop:    '0', // the section top padding
          sectionPaddingBottom: '0', // the section bottom padding
          verticalAlign:        false // align the content of each section vertical
        };
    	return (
	        <div className="home" >
                <SectionsContainer {...options}>
                    <Section>
                        <div className = "first-box">
                            <QueueAnim component={'ul'} interval={2000} type={'left'}  duration={[2000,2000]} ease={[0.17, 0.67, 0.83, 0.67]} className="first-list">
                                <li key="1"><img src={require('../images/home-a1.png')} alt="" /></li>
                                <li key="2"><img src={require('../images/home-a2.png')} alt="" /></li>
                                <li key="3"><img src={require('../images/home-a3.png')} alt="" /></li>
                                <li key="4"><img src={require('../images/home-a4.png')} alt="" /></li>
                                <li key="5"><img src={require('../images/home-a5.png')} alt="" /></li>
                            </QueueAnim>
                        </div>
                    </Section>
                    <Section>
                        <div className="second-box">
                            <p>
                                <img src={require('../images/home-b1.jpg')} alt=""/>
                            </p>
                        </div>
                    </Section>
                </SectionsContainer>

	        </div>
    	)
    }
}

export default Home;
