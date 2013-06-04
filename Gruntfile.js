/**
 * To use grunt, refer to http://gruntjs.com/
 */
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: ['underscore-before.js', 'specs/**/*.js']
    },
    clean: {
      build: ['build/']
    },
    uglify: {
      build: {
        src: ['underscore-before.js'],
        dest: './build/underscore-before.min.js'
      }
    },
    jasmine: {
      specs: {
        src : 'underscore-before.js',
        options: {
          specs: 'specs/specs.js',
          vendor: 'components/underscore/underscore.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task.
  grunt.registerTask('default', 'jshint');
  grunt.registerTask('spec', 'jasmine-server');
  grunt.registerTask('build', ['jshint', 'clean', 'uglify']);
};