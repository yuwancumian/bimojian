import React, { Component } from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <div className="container">
          <div className="aside">
            <div className="logoc">
              <Link to="/" title="返回首页">
                <img src={require('../images/logo.png')} alt=""/>
              </Link>
            </div>
            <div className ="slash"></div>
            <Navbar />
            <div className ="slash"></div>
            <div className ="footer">
                <p> Copyright @2016 | 笔墨间 </p>
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
