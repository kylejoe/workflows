//bring in the gulp library and assign it to the variable gulp
//all the methods and properties assigned to this var
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee');
										//*.coffee any file with extension of coffee
var coffeeSources = ['components/coffee/tagline.coffee']

gulp.task('coffee', function() {
	gulp.src('coffeeSources')
	//bare true compiles j without putting in safety wrapper
	.pipe(coffee({ bare: true })
		//use gutil plugin and send error as log to console
		.on('error', gutil.log))
	//move processed file to scripts folder
	.pipe(gulp.dest('components/scripts'))
});