var gulp = require('gulp');
var ngdocs = require('gulp-ngdocs');

gulp.task('docs',function(){
  var options = {
    scripts: [
      'bower_components/angular/angular.min.js',
      'bower_components/angular-animate/angular-animate.min.js',
      'index.js'
    ]
  };
  return gulp.src('index.js')
    .pipe(ngdocs.process(options))
    .pipe(gulp.dest('./docs'))
  ;
});

gulp.task('default',['docs']);
