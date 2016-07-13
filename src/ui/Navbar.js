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
                <li><Link label="Home" to="/">主 頁</Link></li>
                {/*<li><Link label="Classic" to="/classic">现代书法</Link></li>*/}
                <li><Link label="Classic" to="/classic">書法賞析</Link></li>
                <li><Link label="Search" to="/search" >搜 索</Link></li>
                <li><Link label="About" to="/about">關 於</Link></li>
	        </ul>
    	)
    }
}

export default Navbar;
