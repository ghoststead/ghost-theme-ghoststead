const gulp = require('gulp');
const pump = require('pump');

// gulp plugins and utils
const livereload = require('gulp-livereload');
const zip = require('gulp-zip');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const clean = require('gulp-clean');
const webpack = require('webpack-stream');
const named = require('vinyl-named');

function serve(done) {
    livereload.listen();
    done();
}

function cleaner(done) {
    pump([
        gulp.src(['assets/built'], {read: false}),
        clean()
    ], done);
}

function hbs(done) {
    pump([
        gulp.src(['*.hbs', 'partials/**/*.hbs']),
        livereload()
    ], done);
}

function scss(done) {
    pump([
        gulp.src('scss/*.scss', {sourcemaps: true}),
        sass({
            outputStyle: 'compressed'
        }),
        gulp.dest('assets/built/', {sourcemaps: '.'}),
        livereload()
    ], done);
}

function js(done) {
    pump([
        gulp.src(
            ['node_modules/bootstrap/dist/js/bootstrap.js', 'js/vendor/**/*.js', 'js/theme.js'],
            {sourcemaps: true}
        ),
        concat('ghoststead.min.js'),
        uglify(),
        gulp.dest(
            'assets/built/js/',
            {sourcemaps: '.'}
        ),
        livereload()
    ], done);
}

function js2(done) {
    pump([
        gulp.src(['js/*.js', '!js/theme.js']),
        named(),
        webpack(require('./webpack.config')),
        gulp.dest('assets/built/js/'),
        livereload()
    ], done);
}

function vendor(done) {
    pump([
        gulp.src(
            ['node_modules/ghost-theme-utils/dist/js/*.js']
        ),
        uglify(),
        rename({ suffix: '.min' }),
        gulp.dest('assets/built/js/'),
        livereload()
    ], done);
}

function zipper(done) {
    const pkg = require('./package.json');
    const targetDir = 'dist/';
    const filename = pkg.name + '-' + pkg.version + '.zip';

    pump([
        gulp.src([
            '**',
            '!node_modules', '!node_modules/**',
            '!dist', '!dist/**'
        ]),
        zip(filename),
        gulp.dest(targetDir)
    ], done);
}

const scssWatcher = () => gulp.watch(['scss/**'], scss);
const hbsWatcher = () => gulp.watch(['*.hbs', 'partials/**/*.hbs'], hbs);
const jsWatcher = () => gulp.watch(['js/**'], js2);
const watcher = gulp.parallel(scssWatcher, hbsWatcher, jsWatcher);
const build = gulp.series(scss, js, js2, vendor);
const dev = gulp.series(build, serve, watcher);

exports.build = build;
exports.zip = gulp.series(build, zipper);
exports.default = dev;
exports.clean = cleaner;
