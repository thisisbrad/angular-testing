describe('myapp', function(){
	beforeEach(module('myapp'))

	describe('GithubSvc', function(){
		it('fetches users', function(){
			inject(function(GithubSvc, $httpBackend){
				
				$httpBackend.when('GET', 'https://api.github.com/users')
				.respond(['user a', 'user b'])

				GithubSvc.fetchUsers()
				.then(function(users){
					expect(users).to.be.a('array')
					expect(users).to.have.length(2)
				})

				$httpBackend.flush()
			})
		})
	})

})