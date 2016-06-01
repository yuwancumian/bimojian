import React from 'react';

const ContactBar = React.createClass({
    render() {
        return (
			<div className="contact-bar">
				<a href="">github</a>
				<a href="">email</a>
				<a href="" style={{borderRight:0}}>site</a>
    		</div>
        );
    }
});

module.exports = ContactBar;