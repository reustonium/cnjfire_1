var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var gutil = require('gulp-util');
var ftp = require('gulp-ftp');
 
gulp.task('deploy', function () {
	return gulp.src(['./**/*.*'])
		.pipe(ftp({
			host: 'superiorspeechservices.com',
			user: 'cnjfireprotection@superiorspeechservices.com',
			pass: '15ltSY7V22TCMgUvsfxK'
		}))
		.pipe(gutil.noop());
});

gulp.task('less', function () {
  return gulp.src('./assets/less/template.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('default', function() {
  console.log("GULP!!!!");
});