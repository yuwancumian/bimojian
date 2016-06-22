import React from 'react';
// import data from '../../data/blog';
import BlogItem from './BlogItem';
import Http from '../lib/ghHttp';
import { QueueAnim } from 'antd';

const Blog = React.createClass({
	getInitialState() {
	    return {
	        data: [{name:'loading...'}]
	    };
	},
	componentDidMount() {
		Http.getList()
			.then(function(data){
				this.setState({data: data})
			}.bind(this))
	},
    render() {
		console.log(this.state.data);
		if (!this.state.data){
			return(
				<div> loading </div>
			)
		}
    	const BlogItems = this.state.data.map(function(item,index){
			return (
				<BlogItem
					key = { index }
					name = { item.name }
				/>
			)
    	});
        return (
			<div className="blog-wrapper">
				<ul>
					<QueueAnim delay={100} >
						{ BlogItems }
					</QueueAnim>
				</ul>
			</div>
        );
    }
});

export default Blog;
