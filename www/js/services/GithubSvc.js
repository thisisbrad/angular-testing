app.service('GithubSvc', ['$http', function($http) {
    this.fetchUsers = function(){
    	return $http.get('https://api.github.com/users')
    	.then(function(response){
    		console.log('data', response.data);
    		return response.data
    	}, function(response) {
    		// called asynchronously if an error occurs
    		// or server returns response with an error status.
  		})
    }
}]);