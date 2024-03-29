var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var svgmin      = require('gulp-svgmin');
var config      = require('../config');

gulp.task('minify:svg', function() {
  return gulp
    .src(config.src.root + '/images/minifyme/**/*.svg')
    .pipe(plumber({
        errorHandler: config.errorHandler
    }))
    .pipe(svgmin({
        js2svg: {
            pretty: true
        },
        plugins: [{
            removeDesc: true
        }, {
            cleanupIDs: true
        }, {
            mergePaths: false
        }, {
          removeViewBox: false
        }]
    }))
    .pipe(gulp.dest(config.src.iconsSvg));
});

gulp.task('minify:svg:watch', function() {
    gulp.watch(config.src.root + '/images/minifyme/**/*.svg', ['minify:svg']);
});
