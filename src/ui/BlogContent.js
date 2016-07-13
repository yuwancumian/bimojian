import React from 'react';
import Http from '../lib/ghHttp';

const BlogContent = React.createClass({
	getInitialState() {
	    return {
	        data: ''
	    };
	},
	componentWillMount() {
		let title = this.props.params.title;
		Http.getPost(title)
		.then(function(body){
			this.setState({data: body})
		}.bind(this))
	},
	render() {
		console.log(this.state.data);
		return (
			<div className="blog-content">
				<h3>{ this.props.params.title }</h3>
				<div dangerouslySetInnerHTML = {{__html:this.state.data }} />
			</div>
		)
	}
});

export default BlogContent;
