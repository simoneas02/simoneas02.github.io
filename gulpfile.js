
// Modules :)
// ===========================================
const gulp = require('gulp');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const connect = require('gulp-connect');
const imagemin = require('gulp-imagemin');
const babel = require("gulp-babel");
const stylint = require('gulp-stylint');
const ghPages = require('gulp-gh-pages');
const vulcanize = require('gulp-vulcanize');
const autoprefixer = require('gulp-autoprefixer');


// Compile Pug
// ===========================================
gulp.task('pug', () => {
  gulp.src('./src/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./out/'))
    .pipe(connect.reload());
});

// Vulcanize
// ===========================================
gulp.task('vulcanize', () => {
    gulp.src('out/index.html')
        .pipe(vulcanize({
          abspath: '',
          excludes: [],
          stripExcludes: false
        }))
        .pipe(gulp.dest('out/'))
});

// Move
// ===========================================

gulp.task('move', () => {
    gulp.src('src/simone.appcache')
        .pipe(gulp.dest('out/'))
});

// Stylus features
// ===========================================
gulp.task('autoprefixer', () =>
    gulp.src('./out/assets/styles/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./out/assets/styles/'))
);

gulp.task('stylus', () => {
  gulp.src('./src/assets/styles/*.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./out/assets/styles/'))
    .pipe(connect.reload());
});

gulp.task('stylint', () => {
    gulp.src('src/assets/styles/*.styl')
      .pipe(stylint())
      .pipe(stylint.reporter());
});

// Babel
// ===========================================
gulp.task("babel", () => {
    gulp.src('./src/assets/scripts/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./out/assets/scripts/'))
    .pipe(connect.reload());
});

// Imagemin
// ===========================================
gulp.task('imagemin', () => {
  gulp.src('./src/assets/img/*')
    .pipe(imagemin(
      [imagemin.gifsicle(), imagemin.jpegtran(), imagemin.optipng(), imagemin.svgo()]
    ))
    .pipe(gulp.dest('./out/assets/img/'))
    .pipe(connect.reload());
});

// Watch pug files, JS  and stylus files for changes & recompile AND lint :)
//Watch minify images too
// ===========================================
gulp.task('watch', () => {
  gulp.watch(['./src/*.pug','./src/**/*.pug','./src/includes/*.html'], ['pug']);
  gulp.watch(['./src/assets/styles/*.styl'], ['stylus']);
  gulp.watch(['./src/assets/img/*'], ['imagemin']);
  gulp.watch(['./src/assets/scripts/*.js'], ['babel']);
});

// Static server
// ===========================================
gulp.task('server', () => {
  connect.server({
    root: './',
    livereload: true
  });
});

// Deploy
// ===========================================
gulp.task('deploy', () => {
  gulp.src('./out/**/*')
    .pipe(ghPages({
      branch: 'master'
    }));
});

// More Tasks
// ===========================================
gulp.task('build', ['pug','stylus','imagemin','babel', 'move', 'autoprefixer']);
gulp.task('serve', ['watch','server']);
