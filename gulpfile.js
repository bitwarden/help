const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const merge = require('merge-stream');
const bs = require('browser-sync').create();

const paths = {};
paths.dist = './_site/';
paths.sass = './_sass/';
paths.libDir = './lib/';
paths.npmDir = './node_modules/';
paths.cssDir = './css/';
paths.jsDir = './scripts/';

function cleanLib() {
    return del(paths.libDir)
}

function cleanDist() {
    return del(paths.dist)
}

function lib() {
    var libs = [
        {
            src: paths.npmDir + 'bootstrap/dist/js/bootstrap.min.js',
            dest: paths.libDir + 'bootstrap/js'
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
        },
        {
            src: paths.npmDir + 'fluidbox/dist/**/*',
            dest: paths.libDir + 'fluidbox'
        }
    ];

    var tasks = libs.map((lib) => {
        return gulp.src(lib.src).pipe(gulp.dest(lib.dest));
    });

    return merge(tasks);
}

function convertSass() {
    return gulp.src('_scss/**/*.scss')
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('css/'))
        .pipe(bs.reload({
            stream: true
        }));
}

exports.build = gulp.series(gulp.parallel(cleanLib, cleanDist), lib, convertSass);
exports['clean:dist'] = cleanDist;
exports['clean:lib'] = cleanLib;
exports.clean = gulp.parallel(cleanLib, cleanDist, convertSass);
exports.lib = gulp.series(cleanLib, lib, convertSass);
