import 'whatwg-fetch';
var baseUrl = 'http://v.yuwancumian.net/wp-json/wp/v2';

const service =  {
	get: function(url){
		return fetch( baseUrl + url)
		.then(function(response){
			return response.json();
		})
	}
}
export default service;