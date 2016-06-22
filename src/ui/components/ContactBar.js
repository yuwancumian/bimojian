import React from 'react';
import { Icon } from 'antd';

const ContactBar = React.createClass({
    render() {
        return (
			<div className="contact-bar">
				<a href=""><Icon type="link" /></a>
				<a href=""><Icon type="step-backward" /></a>
				<a href="" style={{borderRight:0}}>site</a>
    		</div>
        );
    }
});

module.exports = ContactBar;