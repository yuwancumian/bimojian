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
                <li><Link label="Classic" to="/classic">现代书法</Link></li>
                <li><Link label="Classic" to="/classic">经典赏鉴</Link></li>
                <li><Link label="Search" to="/search" >检 索</Link></li>
                <li><Link label="About" to="/about">关 于</Link></li>
	        </ul>
    	)
    }
}

export default Navbar;
