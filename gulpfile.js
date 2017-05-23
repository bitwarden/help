var gulp = require('gulp'),
    rimraf = require('rimraf'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    runSequence = require('run-sequence'),
    merge = require('merge-stream');

var paths = {};
paths.dist = './_site/';
paths.sass = './_sass/';
paths.libDir = './lib/';
paths.npmDir = './node_modules/';
paths.cssDir = './css/';
paths.jsDir = './scripts/';

gulp.task('build', function (cb) {
    return runSequence(
        'clean',
        'lib',
        cb);
});

gulp.task('clean:lib', function (cb) {
    return rimraf(paths.libDir, cb);
});

gulp.task('clean', ['clean:lib']);

gulp.task('lib', ['clean:lib'], function () {
    var libs = [
        {
            src: paths.npmDir + 'bootstrap-sass/assets/javascripts/bootstrap.min.js',
            dest: paths.libDir + 'bootstrap/js'
        },
        {
            src: paths.npmDir + 'bootstrap-sass/assets/fonts/bootstrap/*',
            dest: paths.libDir + 'bootstrap/fonts'
        },
        {
            src: [
                paths.npmDir + 'font-awesome/**/css/font-awesome.min.css',
                paths.npmDir + 'font-awesome/**/fonts/*'
            ],
            dest: paths.libDir + 'font-awesome'
        },
        {
            src: paths.npmDir + 'jquery/dist/jquery.min.js',
            dest: paths.libDir + 'jquery'
        },
        {
            src: paths.npmDir + 'lunr/lunr.js',
            dest: paths.libDir + 'lunr'
        }
    ];

    var tasks = libs.map(function (lib) {
        return gulp.src(lib.src).pipe(gulp.dest(lib.dest));
    });

    return merge(tasks);
});
