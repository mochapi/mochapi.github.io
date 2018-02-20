var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var cssmin = require('gulp-cssmin');

// lessコンパイル
gulp.task('less', function() {
    return gulp.src(['./less/*.less', '!./less/**/_*.less'])
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(''));
});

// gulpコマンド実行時に行われるタスク
gulp.task('default', function() {
  gulp.watch("./less/*.less", ['less']);
});
