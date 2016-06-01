import React from 'react';
import { Link } from 'react-router';

const LinkNav = React.createClass({
    render() {
        return (
			<div className="link-nav">
				<Link to="" className="prev">prev</Link>
				<Link to="" className="next">next</Link>
			</div>			
        );
    }
});

module.exports = LinkNav;