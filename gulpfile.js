// -- Importando Plugins -- //

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));

//-------------------------------------------------------//

// -- Fuções dos Plugins -- //

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

function  minifyJS() {
    return gulp.src('src/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
}
//-------------------------------------------------------//

// -- Importando os arquivos e observando as alterações em paralelo -- //

exports.default = gulp.parallel(styles, images, minifyJS) 

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}

//-------------------------------------------------------//