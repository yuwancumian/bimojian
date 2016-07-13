import React from 'react';
import { History } from 'react-router';


const ContactBar = React.createClass({
    mixins: [ History ],
    render() {
        return (
			<div className="contact-bar">
				<a href={this.props.download_url} title="下载" target="_blank"><img src={require('../../images/icon-download.png')} alt="" style={{marginBottom:3}}/></a>
				<a href="#" title="分享"><img src={require('../../images/icon-share.png')} alt="" /></a>
				<a href="" title="分享" style={{borderRight: 'none'}} onClick={() => this.history.goBack()}><img src={require('../../images/icon-like.png')} alt="" /></a>
    		</div>
        );
    }
});

module.exports = ContactBar;
