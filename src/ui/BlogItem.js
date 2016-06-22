import React from 'react';
import { Link } from 'react-router';

const BlogItem = React.createClass({
	render(){
		return (
			<li>
				<Link to = { '/blog/' + this.props.name } > { this.props.name }</Link>
			</li>
		)
	}
});
export default BlogItem;