import React from 'react';
import { History } from 'react-router';


const ContactBar = React.createClass({
    mixins: [ History ],
    render() {
        return (
			<div className="contact-bar">
				<a href="" title="返 回" style={{marginTop:3}} onClick={() => this.history.goBack()}><img src={require('../../images/icon-back.png')} alt="" style={{width: 30}}/></a>
				<a href="#" title="分 享"><img src={require('../../images/icon-share.png')} alt="" /></a>
				<a href={this.props.download_url} style={{borderRight: 'none'}} title="下 载" target="_blank"><img src={require('../../images/icon-download.png')} alt="" style={{marginBottom:3}}/></a>
    		</div>
        );
    }
});

module.exports = ContactBar;
