app.controller('GithubCtrl', ['$scope', 'GithubSvc', function($scope,GithubSvc) {
	GithubSvc.fetchUsers()
	.then(function(users){
		$scope.users = users;
	});
}]);