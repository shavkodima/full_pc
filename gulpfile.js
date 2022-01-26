const del = require('del');
const {src, dest, series} = require('gulp');
const autoprefixer = require('gulp-autoprefixer')
const concat = require('gulp-concat')
const sass = require('gulp-sass')(require('sass'));

function html(){
    return src('*.html')
    .pipe(dest('deploy/'))
}



function css(){
    
    return src("css/*.css")
    .pipe(autoprefixer({
        browsers:['last 2 version']
    }))
    .pipe(concat('style.css'))
    .pipe(dest('deploy/css'))
}


function sassGen(){
    return src('css/*.scss')
    .pipe(sass())
    .pipe(concat('header.css'))
    .pipe(dest('deploy/css'))
}


exports.build = series( html, css, sassGen)