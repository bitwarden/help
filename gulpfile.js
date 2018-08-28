var gulp = require('gulp'),
    rimraf = require('rimraf'),
    runSequence = require('run-sequence'),
    ghPages = require('gulp-gh-pages'),
    merge = require('merge-stream'),
    gulpUtil = require('gulp-util'),
    child = require('child_process');

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

gulp.task('clean:dist', function (cb) {
    return rimraf(paths.dist, cb);
});

gulp.task('clean', ['clean:lib', 'clean:dist']);

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
        },
        {
            src: paths.npmDir + 'fluidbox/dist/**/*',
            dest: paths.libDir + 'fluidbox'
        }
    ];

    var tasks = libs.map(function (lib) {
        return gulp.src(lib.src).pipe(gulp.dest(lib.dest));
    });

    return merge(tasks);
});

gulp.task('deploy', [], function () {
    return gulp.src(paths.dist + '**/*')
        .pipe(ghPages({ cacheDir: '../.publish_cache/help' }));
});

function jekyll(commands, cb) {
    var jekyllLogger = (buffer) => {
        buffer.toString()
            .split(/\n/)
            .forEach((message) => gulpUtil.log(message));
    };
    var jekyllCommand = process.platform === "win32" ? "jekyll.bat" : "jekyll";
    var jekyll = child.spawn(jekyllCommand, commands);
    jekyll.stdout.on('data', jekyllLogger);
    jekyll.stderr.on('data', jekyllLogger);
    jekyll.stderr.on('close', cb);
    return jekyll;
}

gulp.task('jekyll:build', function (cb) {
    return jekyll(['build', '--watch'], cb);
});

gulp.task('jekyll:serve', function (cb) {
    return jekyll(['serve', '--watch', '--host=0.0.0.0'], cb);
});

gulp.task('default', function (cb) {
    return runSequence(
        'build',
        'jekyll:serve',
        cb);
});