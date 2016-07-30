import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'rc-scroll-anim/assets/index.css';
import QueueAnim from 'rc-queue-anim';
import ScrollAnim from 'rc-scroll-anim';
const ScrollOverPack = ScrollAnim.OverPack;
const Link = ScrollAnim.Link;
const Element = ScrollAnim.Element;
const EventListener = ScrollAnim.Event;
ScrollAnim.scrollScreen.init();

class Home extends Component {
    constructor() {
        super(...arguments);
        [
          'barAnimate',
          'onFocus',
        ].forEach((method) => this[method] = this[method].bind(this));
    }
    componentDidMount() {
    // 添加改变窗口事件,可加setTimeout
        EventListener.addEventListener('resize.userResize', this.barAnimate.bind(this));
    }
    onFocus(e) {
        this.dom = e.target;
      }

      barAnimate() {
        if (!this.dom) {
          return;
        }
     }
    render() {

    	return (
	        <div className="home" >
                <div className="nav">
                    <Link
                        className="nav-list"
                        location="page0"
                        showHeightActive="300"
                        ref="page0"
                        onFocus={this.onFocus}
                     >

                    </Link>
                    <Link
                        className="nav-list"
                        location="page1"
                        showHeightActive="300"
                    >

                  </Link>
                </div>
                <ScrollOverPack className="page0" scrollName="page0" playScale={1}
                always
                replay
                hideProps={{ 0: { reverse: false } }}>
                    <div className = "first-box">
                        <QueueAnim key="1" component={'ul'} interval={2000} type={'left'}  duration={[2000,2000]} ease={[0.17, 0.67, 0.83, 0.67]} className="first-list">
                            <li key="1"><img src={require('../images/home-a1.png')} alt="" /></li>
                            <li key="2"><img src={require('../images/home-a2.png')} alt="" /></li>
                            <li key="3"><img src={require('../images/home-a3.png')} alt="" /></li>
                            <li key="4"><img src={require('../images/home-a4.png')} alt="" /></li>
                            <li key="5"><img src={require('../images/home-a5.png')} alt="" /></li>
                        </QueueAnim>
                    </div>
                </ScrollOverPack>
                <ScrollOverPack  scrollName="page1"
                className="page1"
                playScale={1}
                 always={false}
                hideProps={{ 0: { reverse: false } }}>
                    <div className="second-box">
                        <QueueAnim  key="2" component={'ul'} interval={2000} type={'left'}  duration={[2000,2000]} ease={[0.17, 0.67, 0.83, 0.67]} className="second-list">
                            <li key="1"><img src={require('../images/home-b1.jpg')} alt="" /></li>
                            <li key="2"><img src={require('../images/home-b2.jpg')} alt="" /></li>
                            <li key="3"><img src={require('../images/home-b3.jpg')} alt="" /></li>
                            <li key="4"><img src={require('../images/home-b4.jpg')} alt="" /></li>
                        </QueueAnim>
                    </div>
                </ScrollOverPack>

	        </div>
    	)
    }
}

export default Home;
