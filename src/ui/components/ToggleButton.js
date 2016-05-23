import React ,{ PropTypes } from 'react';

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
			toggled: true
		}) 

	},
	out(){
		this.setState({
			toggled: false
		}) 
	},
    render() {
    	var ToggleText = this.state.toggled ?  <i>{this.props.toggleText}</i> : "";
        return (
			<a onMouseOver = {this.hover} onMouseOut = {this.out} >
				{this.props.label}
				{ToggleText }
			</a>

        );
    }
});

module.exports = ToggleButton;
