var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require("gulp-plumber");

gulp.task('build-css', function() {
  return gulp.src(['less/*.less', '!less/**/_*.less'])
    .pipe(plumber())
    .pipe(less()).pipe(gulp.dest(''));
});

gulp.task('default', function() {
  gulp.watch("less/*.less", ['build-css']);
});
