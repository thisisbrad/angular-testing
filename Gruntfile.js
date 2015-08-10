module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		connect: {
			server: {
				options: {
					port: 5080,
					base: 'www', 
					hostname: 'localhost',
					livereload: 9000
				}
			}
		},

		watch: {
			options: {
				livereload: {port: 9000}
			},
			css:{
				files: 'www/css/**/*.css'
			},
			js:{
				files: 'www/js/**/*.js'
			},
			html:{
				files: 'www/**/*.html'
			}
		},

		wiredep: {
			target:{
				src: [
					'www/index.html',
				]
			}
		},

		uglify: {
		    options: {
		    	banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
		        '<%= grunt.template.today("yyyy-mm-dd") %> */'
		    },
		    distro: {
		    	src : 'components/**/*.js',
    			dest : 'www/js/script.js'
		    }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-wiredep');

	grunt.registerTask('default', ['connect', 'wiredep', 'watch']);
	grunt.registerTask('compress', ['uglify:distro']);
};