//bring in the gulp library and assign it to the variable gulp
//all the methods and properties assigned to this var
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	browserify = require('gulp-browserify'),
	concat = require('gulp-concat');

										//*.coffee any file with extension of coffee
var coffeeSources = ['components/coffee/tagline.coffee'];
var jsSources = [
		'components/scripts/pixgrid.js',
		'components/scripts/rclick.js',
		'components/scripts/tagline.js',
		'components/scripts/template.js'];

gulp.task('coffee', function() {
	gulp.src('coffeeSources')
	//bare true compiles j without putting in safety wrapper
	.pipe(coffee({ bare: true })
		//use gutil plugin and send error as log to console
		.on('error', gutil.log))
	//move processed file to scripts folder
	.pipe(gulp.dest('components/scripts'))
});

gulp.task('js', function() {
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(browserify())
		.pipe(gulp.dest('builds/development/js'))
});