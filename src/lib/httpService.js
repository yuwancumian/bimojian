import 'whatwg-fetch';
var baseUrl = 'http://api.bimojian.com/wp-json/wp/v2';

const service =  {
	get: function(url){
		return fetch( baseUrl + url)
		.then(function(response){
			return response.json();
		})
	},
	search: function(keyword) {
		return fetch(baseUrl + '/posts?search=' + keyword )
		.then(function(response){
			return response.json();
		})
	}
}
export default service;
