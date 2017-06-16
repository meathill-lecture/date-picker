/**
 * Created by meathill on 2017/6/16.
 */

const del = require('del');
const gulp = require('gulp');
const stylus = require('gulp-stylus');
const cleanCSS = require('gulp-clean-css');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const uglify = require('gulp-uglify');
const sequence = require('run-sequence');

const DOC = 'docs/';

gulp.task('clear', () => {
  return del(DOC);
});

gulp.task('stylus', () => {
  return gulp.src('./styl/tqb-date-picker.styl')
    .pipe(stylus())
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(gulp.dest(DOC + 'css'));
});

gulp.task('webpack', () => {
  return gulp.src('./app/main.js')
    .pipe(webpackStream(require('./webpack.config.prod'), webpack))
    .pipe(uglify())
    .pipe(gulp.dest(DOC + 'js'));
});

gulp.task('default', callback => {
  sequence(
    'clear',
    ['stylus', 'webpack'],
    callback
  );
});