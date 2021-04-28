const gulp = require('gulp');

const browsersync = require("browser-sync").create();

const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const $ = require("gulp-load-plugins")();

/*
browser-sync
*/

gulp.task('build-server', function (done) {
  browsersync.init({
      server: {
          baseDir: "./dist"
      }
  });
  done();
  console.log('Server was launched');
});

gulp.task('browser-reload', function (done){
  browsersync.reload();
  done();
  console.log('Browser reload completed');
});

/*
pug
*/

gulp.task('pug', () => {
  return gulp.src(['src/pug/**/*.pug', '!src/pug/**/_*.pug'])
  .pipe($.plumber())
  .pipe($.pug({
    pretty: true
  }))
  .pipe(gulp.dest('./dist'));
});

/*
sass
*/

gulp.task('sass', () => {
  return gulp.src('src/scss/**/*.scss' )
  .pipe($.plumber())
  .pipe($.sourcemaps.init())
  .pipe($.sass({
    outputStyle: 'compressed',
    includePaths: ['.'],
  }).on('error', $.sass.logError))
  .pipe(gulp.dest('./dist/assets/css'));
});

/*
webpack
*/

gulp.task('webpack', () => {
  return webpackStream(webpackConfig, webpack)
  .pipe(gulp.dest('./dist/assets/js')); 
});

/*
watch
*/

gulp.task('watch', () => {
  gulp.watch('./src/scss/**/*.scss',gulp.series('sass','browser-reload'));
  gulp.watch('./src/pug/**/*.pug',gulp.series('pug','browser-reload'));
  gulp.watch(['./src/js/**/*.ts', './src/js/**/*.js'],gulp.series('webpack','browser-reload'));
});

/*
default
*/

gulp.task('default', gulp.series('build-server', 'watch'), (done) => {
  done();
  console.log('default');
});
