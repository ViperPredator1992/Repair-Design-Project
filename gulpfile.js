const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sass = require('gulp-sass');


// Static server
function bs() {
    serveSass();
    //minifyCSS();
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
    watch("./src/*.html").on('change', browserSync.reload);
    watch("./src/sass/**/*.sass").on('change', serveSass);
    watch("./src/sass/**/*.scss").on('change', serveSass);
    //watch("./src/css/*.css").on('change', minifyCSS);
    watch("./src/js/*.js").on('change', browserSync.reload);
}

// CSS
// function minifyCSS(done) {
//     src('./src/css/*.css')
//     .pipe(rename({suffix: '.min'}))
//     .pipe(cleanCSS({compatibility: 'ie8'}))
//     .pipe(dest('dist/css/'));
//     //done();
// }


// SASS/SCSS
function serveSass() {
    return src("./src/sass/**/*.sass", "./src/sass/**/*.scss")
        .pipe(sass())
        .pipe(dest("./src/css"))
        .pipe(browserSync.stream());
}

exports.serve = bs;