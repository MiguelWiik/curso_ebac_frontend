const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');

function compilarSass() {
    return gulp.src('./source/styles/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        style: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/styles'))
}

function comprimirImagens() {
    return gulp.src('./source/images/*', {encoding: false}) 
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
}

function comprimirJavaScript() {
    return gulp.src('./source/scripts/*.js')
    .pipe(obfuscate())
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts'))
}

exports.sass = compilarSass;
exports.imagemin = comprimirImagens;
exports.jsmin = comprimirJavaScript;
