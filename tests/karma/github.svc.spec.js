describe('myapp', function(){
	beforeEach(module('myapp'))

	describe('GithubSvc', function(){
		it('fetches users', function(){
			inject(function(GithubSvc){
				GithubSvc.fetchUsers()
				.then(function(users){
					console.log(users)
				})
			})
		})
	})

})