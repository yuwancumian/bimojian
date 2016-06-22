import 'whatwg-fetch';
import config from '../config';

const listUrl = `http://api.github.com/repos/${config.repo}/contents/${config.path}?ref=${config.branch}`;

const ghHttp = {
	getList: function() {
		console.log(listUrl)
		return fetch(listUrl)
		.then(function(response){
			return response.json();
		})
	},
	getPost: function(title){
		const postUrl = `http://api.github.com/repos/${config.repo}/contents/${config.path}/${title}?ref=${config.branch}`;
		return fetch(postUrl,{
			headers:{
				"Accept": "application/vnd.github.v3.html"
			}
		}).then(function(response){
			return response.text();
		})
	}
}
// githubService.getPost = function ( title ){
// 	const postUrl = `http://api.github.com/repos/${config.repo}/contents/${config.path}/${title}?ref=master`
// };
export default ghHttp;
