const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const minifyCss = require('gulp-minify-css');

function css() {
    return src('src/css/base.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(concat('styles.css'))
        .pipe(minifyCss())
        .pipe(dest('public/css'));
}

function watching() {
    watch(['src/css/**/*.scss', 'src/css/**/*.css'], {delay: 500}, css);
}

exports.default = series(css, watching);

