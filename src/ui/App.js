import React, { Component } from 'react';
import { NICE, SUPER_NICE } from '../colors';
import { Col,Row } from 'react-bootstrap';
import Navbar from './Navbar';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <div className="container">
          <div className="aside">
            <div className="logo">
              <img src={require('../images/logo.png')} alt=""/>
            </div>
            <div className ="slash"></div>
            <Navbar />
            <div className ="slash"></div>
            <div className ="footer">
                <p>copyright 2014 by trynet .all rights reserved</p>
            </div>
          </div>
          <div className="article">
            { this.props.children }
          </div>
        </div>
      )
    }
}

export default App;
