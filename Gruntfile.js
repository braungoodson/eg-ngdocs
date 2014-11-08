module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ngdocs: {
      options: {
        dest: 'docs',
        scripts: [
          './bower_components/angular/angular.min.js',
          './bower_components/angular-animate/angular-animate.min.js',
          './index.js'
        ],
        startPage: '/api',
        title: 'eg-ngdocs'
      },
      all: {
        src: 'index.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-ngdocs');
  grunt.registerTask('default',['ngdocs']);
};
