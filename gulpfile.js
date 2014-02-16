var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var watch = require('gulp-watch');

gulp.task('jade', function() {
  var locals = {};

  gulp.src(['public/*.jade'])
    .pipe(jade({
      locals: locals
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('stylus', function() {
  gulp.src(['public/css/*.styl'])
    .pipe(stylus())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {
  gulp.src(
    [
      'public/js/*.js',
      'public/controller/*.js'
    ],
    {
      base: 'public'
    }
  )
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch(['public/*.jade'], ['jade']);
  gulp.watch(['public/css/*.styl'], ['stylus']);
  gulp.watch(['public/js/*.js'], ['js']);
});

gulp.task('default', ['jade', 'stylus', 'js']);
