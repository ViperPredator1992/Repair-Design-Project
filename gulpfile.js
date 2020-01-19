const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

// Static server
function bs() {
    serveSass();
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
    watch("./src/*.html").on('change', browserSync.reload);
    watch("./sass/**/*.sass").on('change', serveSass);
    watch("./js/*.js").on('change', browserSync.reload);
}

// CSS
function minifyCSS(done) {
    src('./src/css/*.css')
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('dist/css/'));
    //done();
}
minifyCSS();

// SASS/SCSS
function serveSass() {
    return src("./sass/*.sass")
        .pipe(sass())
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
}

exports.serve = bs;