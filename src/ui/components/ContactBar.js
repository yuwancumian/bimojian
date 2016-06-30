import React from 'react';
import { Icon } from 'antd';

const ContactBar = React.createClass({
    render() {
        return (
			<div className="contact-bar">
				<a href=""><img src={require('../../images/icon-qq.png')} alt="" /><br/>赞</a>
				<a href=""><img src={require('../../images/icon-qq.png')} alt="" /><br/>下载</a>
				<a href="" style={{borderRight:0}}><img src={require('../../images/icon-weixin.png')} alt="" /><br/>分享</a>
    		</div>
        );
    }
});

module.exports = ContactBar;
