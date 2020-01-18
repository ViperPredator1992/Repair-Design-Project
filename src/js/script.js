const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
    gulp.watch("./src/*.html").on('change', browserSync.reload);
});

// CSS
gulp.task('minify-css', function (done) {
    gulp.src('./src/css/*.css')
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css/'))
    done();
});

gulp.task('move', function (done) {
    gulp.src('./src/css/*.css', './src/js/*.js')
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css/'))
    done();
});