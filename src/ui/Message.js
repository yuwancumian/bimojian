import React, { Component } from 'react';
import {Link} from 'react-router';
import Http from '../lib/httpService';

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
    	Http.get('/posts/1')
    	.then(function(data){
    		this.setState({data: data})
    	}.bind(this));
    },
    render() {
    	console.log(this.state.data);
        return (
			<div dangerouslySetInnerHTML = {{__html:this.state.data.content.rendered }} />
        );
    }
});

module.exports = Message;