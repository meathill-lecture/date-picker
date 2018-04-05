/**
 * Created by meathill on 2017/6/16.
 */

const del = require('del');
const gulp = require('gulp');
const stylus = require('gulp-stylus');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const sequence = require('run-sequence').use(gulp);

const DOC = 'docs/';

gulp.task('clear', () => {
  return del([DOC]);
});

gulp.task('stylus', () => {
  let toPath = DOC + 'css';
  return gulp.src('./styl/tqb-date-picker.styl')
    .pipe(stylus())
    .pipe(gulp.dest(toPath))
    .pipe(rename('tqb-date-picker.min.css'))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(gulp.dest(toPath));
});

gulp.task('webpack', () => {
  let toPath = DOC + 'js';
  return gulp.src('./app/main.js')
    .pipe(webpackStream(require('./webpack.config.prod'), webpack))
    .pipe(rename('tqb-date-picker.js'))
    .pipe(gulp.dest(toPath))
    .pipe(rename('tqb-date-picker.min.js'))
    .pipe(gulp.dest(toPath));
});

gulp.task('default', callback => {
  sequence(
    'clear',
    ['stylus', 'webpack'],
    callback
  );
});