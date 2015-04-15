//bring in the gulp library and assign it to the variable gulp
//all the methods and properties assigned to this var
var gulp = require('gulp');
	gutil = require('gulp-util');

gulp.task('log', function(){
	gutil.log('Workflows are awesome');
});