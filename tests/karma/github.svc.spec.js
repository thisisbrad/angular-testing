describe('myapp', function(){
	beforeEach(module('myapp'))

	describe('GithubSvc', function(){
		it('fetches users', function(done){
			inject(function(GithubSvc, $httpBackend){
				//console.log(GithubSvc)
				$httpBackend.when('GET', 'https://api.github.com/users')
				.repsond(['user a', 'user b'])

				GithubSvc.fetchUsers()
				.then(function(users){
					console.log(users)
					done()
				})

				$httpBackend.flush()
			})
		})
	})

})