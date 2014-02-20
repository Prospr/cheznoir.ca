module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-shopify');

	grunt.initConfig({
		uglify: {
			myTarget: {
				files: {
					'js/prospr.js': ['js/components/*.js']
				}//files
			}//myTarget
		},//uglify
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				}//options
			}//dev
		},//compass
		imagemin: {
			dynamic: {
		        files: [{
		            expand: true,
		            cwd: 'assets/',
		            src: ['src/*.{png,jpg,gif}'],
		            dest: 'assets/'
		        }]//files
		    }//dynamic
		},//imagemin
		shopify: {
			options: {
				api_key: 'b3b1c57c536f231d6d85882c16a1ad1d',
				password: 'fd41e8dd71cf20658995ff026bc4df03',
				url: 'chez-noir.myshopify.com',
				base: '',
				theme: '6602185'
			}//options
		},//shopify
		watch: {
			scripts: {
				files: ['js/*.js'],
				tasks: ['uglify']
			},//scripts
			
			sass: {
				files: ['sass/*.scss'],
				tasks: ['compass:dev']
			},//sass
			images: {
				files: ['assets/src/*.{png,jpg,gif}'],
				tasks: ['imagemin']
			},//images
			shopify: {
				files: ['assets/**', 'layout/**', 'templates/**', 'config/**'],
				tasks: ['shopify']
			}//shopify
		}//watch
	})//initConfig
	grunt.registerTask('default', 'watch');
}//exports