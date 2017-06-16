/**
 * Created by meathill on 2017/6/16.
 */

const del = require('del');
const gulp = require('gulp');
const stylus = require('gulp-stylus');
const cleanCSS = require('gulp-clean-css');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const sequence = require('run-sequence');

const DOC = 'docs/';

gulp.task('stylus', () => {
  return gulp.src('./styl/tqb-date-picker.styl')
    .pipe(stylus())
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(gulp.dest(DOC + 'css'));
});