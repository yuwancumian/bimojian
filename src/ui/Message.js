import React, { Component } from 'react';
import {Link} from 'react-router';
import Http from '../lib/httpService';
import Loading from 'react-loading';

const Message = React.createClass({
	getInitialState() {
        return {
            data: {
            	content: {
            		rendered: ''
            	}
            }
        }
    },
    componentWillMount() {
    	Http.get('/comments/1')
    	.then(function(data){
    		this.setState({data: data})
    	}.bind(this));
    },
    render() {
		if(this.state.data.content.rendered ===""){
			return (
				<div className="loading">
                     <Loading type='bubbles' color='#e3e3e3' />
                </div>
			)
		}
        return (
			<div dangerouslySetInnerHTML = {{__html:this.state.data.content.rendered }} />
        );
    }
});

module.exports = Message;
