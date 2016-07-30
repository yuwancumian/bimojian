import 'whatwg-fetch';
var baseUrl = 'http://api.bimojian.com/wp-json/wp/v2';

const service =  {
	getItem: function(url){
		return fetch( baseUrl + url)
		.then(function(response){
			return response.json();
		})
	},
	getClassic: function(){
		if (sessionStorage && sessionStorage.getItem('posts')) {
		   // read data from cache
		   return Promise.resolve(JSON.parse(sessionStorage.posts));

	   } else {
		return fetch( baseUrl + '/posts?categories=2')
			.then(function(response){
				return response.json();
			})
		}
	},
	search: function(keyword) {
		return fetch(baseUrl + '/posts?search=' + keyword )
		.then(function(response){
			return response.json();
		})
	}
}
export default service;
