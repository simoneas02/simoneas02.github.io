const gulp = require('gulp');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const connect = require('gulp-connect');
const imagemin = require('gulp-imagemin');
const babel = require("gulp-babel");

gulp.task('pug', () =>{
  gulp.src('./src/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./out/'))
    .pipe(connect.reload());
});

gulp.task('stylus', () =>{
  gulp.src('./src/assets/styles/*.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./out/assets/styles/'))
    .pipe(connect.reload());
});

gulp.task('imagemin', () =>{
  gulp.src('./src/assets/img/*')
    .pipe(imagemin(
      [imagemin.gifsicle(), imagemin.jpegtran(), imagemin.optipng(), imagemin.svgo()]
    ))
    .pipe(gulp.dest('./out/assets/img/'))
    .pipe(connect.reload());
});

gulp.task('build', ['pug', 'stylus', 'imagemin']);

gulp.task('watch', () =>{
  gulp.watch(['./src/*.pug','./src/**/*.pug'], ['pug']);
  gulp.watch(['./src/assets/styles/*.styl'], ['stylus']);
  gulp.watch(['./src/assets/img/*'], ['imagemin']);
});

gulp.task('server', () =>{
  connect.server({
    root: './out/',
    livereload: true
  });
});

gulp.task("babel", () =>{
    gulp.src('./src/assets/scripts/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./out/assets/scripts/'));
});

gulp.task('serve', ['watch','server']);
