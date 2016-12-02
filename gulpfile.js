var gulp = require('gulp'),
	gulpSass = require('gulp-sass'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	uglifycss = require('gulp-uglifycss');

gulp.task('make:scss',function(){
	return gulp.src('scss/index.scss')
        .pipe(gulpSass())
        .pipe(gulp.dest('css'));
}); 
 
gulp.task('uglify:css', function(){
	return gulp.src([
		'css/plugin/photoswipe/photoswipe.css',
		'css/plugin/photoswipe/default-skin.css',
		'css/index.css'])
		.pipe(concat('index.min.css'))
		.pipe(uglifycss())
		.pipe(gulp.dest('css'));
});