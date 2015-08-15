describe('myapp', function(){
	beforeEach(module('myapp'))

	describe('GithubSvc', function(){
		it('fetches users', function(){
			GithubSvc.fecthUsers()
			.then(function(users){
				console.log(users)
			})
		})
	})

})