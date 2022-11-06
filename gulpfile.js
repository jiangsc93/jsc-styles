'use strict';

const { src, dest, watch } = require('gulp');
const scss = require('./build/gulp-scss-plugin');

exports.build = () => src('./*.scss').pipe(scss()).pipe(dest('./'));

exports.watch = () => watch('./*.scss', exports.build);
