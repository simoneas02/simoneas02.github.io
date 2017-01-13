const gulp = require('gulp');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const connect = require('gulp-connect');

gulp.task('pug', () =>{
  gulp.src('./src/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./out/'))
    .pipe(connect.reload());
});

gulp.task('stylus', () =>{
  gulp.src('./src/assets/styles/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./out/assets/styles/'))
    .pipe(connect.reload());
});

gulp.task('watch', () =>{
  gulp.watch(['./src/*.pug','./src/**/*.pug'], ['pug']);
  gulp.watch(['./src/assets/styles/*.styl'], ['stylus']);
});

gulp.task('server', () =>{
  connect.server({
    root: './out/',
    livereload: true
  });
});

gulp.task('default', ['watch','server']);
