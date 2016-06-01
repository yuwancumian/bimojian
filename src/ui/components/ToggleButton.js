import React ,{ PropTypes } from 'react';
import classNames from 'classnames';

const istyle = {
	display: 'none'
};

const  ToggleButton= React.createClass({
	
	propTypes: {
	    label: PropTypes.string
	},
	getInitialState() {
	    return {
	        toggled: false  
	    };
	},
	hover(){
		console.log(this.state);
		this.setState({
			toggled: true,
			active: true
		}) 

	},
	out(){
		this.setState({
			toggled: false,
			active: false
		}) 
	},
    render() {
    	let ToggleText = this.state.toggled ?  <i>{this.props.toggleText}</i> : "";
    	let classes = classNames('btn',{'active':this.state.active});
        return (
        	<div>
			<a onMouseOver = {this.hover} onMouseOut = {this.out} className = {classes} >
				{ this.props.children}
				<i>{ToggleText}</i>
			</a>
			</div>
        );
    }
});

module.exports = ToggleButton;
