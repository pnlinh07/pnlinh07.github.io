var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');

gulp.task('pack-js', function () {
    return gulp.src(['assets/js/main.js'])
        .pipe(minify())
        .pipe(gulp.dest('js'));
});

gulp.task('pack-css', function () {
    return gulp.src(['assets/css/main.css'])
        .pipe(minify())
        .pipe(gulp.dest('css'));
});

gulp.task('default', ['pack-js', 'pack-css']);