module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	less: {
		development: {
			files: {
				"app.css": "app.less"
			}
		}
	},

	watch: {
		less: {
			files: ['**/*.less'],
			tasks: ['less']
		}
	},

	connect: {
		server: {
			options: {
				port: 8080,
				hostname: '*'
			}
		}
	}

});

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['less', 'connect', 'watch']);

};
