const gulp = require('gulp');
const pump = require('pump');

// gulp plugins and utils
const livereload = require('gulp-livereload');
const zip = require('gulp-zip');
var sass = require('gulp-sass');

function serve(done) {
    livereload.listen();
    done();
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
        sass(),
        gulp.dest('assets/built/', {sourcemaps: '.'}),
        livereload()
    ], done);
}

function js(done) {
    pump([
        gulp.src('node_modules/bootstrap/dist/js/bootstrap.js', {sourcemaps: true}),
        gulp.dest('assets/built/js/', {sourcemaps: '.'}),
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
const watcher = gulp.parallel(scssWatcher, hbsWatcher);
const build = gulp.series(scss, js);
const dev = gulp.series(build, serve, watcher);

exports.build = build;
exports.zip = gulp.series(build, zipper);
exports.default = dev;
