app.controller('GithubCtrl', ['$scope', '$http', function($scope,$http) {
    $http.get('https://api.github.com/users')
    	.then(function (response) {
    	$scope.users = response.data
    	console.info($scope.users);
 	})
}]); 