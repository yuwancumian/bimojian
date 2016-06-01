import React from 'react';
import { Link } from 'react-router';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    handChange(value) {
    	this.context.router.push(value);
  	}
    render() {
    	return (
    		<ul>
	          <li><Link label="Home" to="/">主 页</Link></li>
              <li><Link label="Case" to="/case">作 品</Link></li>
              <li><Link label="About" to="/about">关 于</Link></li>
	          <li><Link label="Case" to="/case">留 言</Link></li>
	        </ul>
    	)
    }
}

export default Navbar;
