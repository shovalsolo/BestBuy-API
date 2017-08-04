var gulp = require("gulp");
var gutil = require("gulp-util");
var notify = require('gulp-notify');
var source = require("vinyl-source-stream");
var buffer = require('vinyl-buffer');
var browserify = require("browserify");
var watchify = require("watchify");
var babelify = require("babelify");
var concat = require('gulp-concat');
var uglifycss = require('gulp-uglifycss');
//var uglify = require('gulp-uglify');
//var reload      = browserSync.reload;
var sass = require('gulp-sass');
var watchSass = require("gulp-watch-sass");
var plumber = require('gulp-plumber');

var browserSync = require("browser-sync").create();

var ENTRY_FILE = "./src/js/index.js";
var OUTPUT_DIR = "./build/js";
var OUTPUT_FILE = "bundle.js";
var DELAY = 50;

//(2) a task that waches for changes in bundle.js file and running browserSync
gulp.task("watch", function () {
    var b = browserify({ entries: [ ENTRY_FILE ] }).transform(babelify);

    function bundle() {
        b.bundle()
        .on("log", gutil.log)
        .on("error", notify.onError())
        .pipe(source(OUTPUT_FILE))
        .pipe(buffer())
        .pipe(gulp.dest(OUTPUT_DIR))
        .pipe(browserSync.reload({ stream: true }));
    }

    watchify(b, { delay: DELAY }).on("update", bundle);
    bundle();
});

//(3) a task that is watching for scss and html files and calling sass-2-css and browserSync
gulp.task("serve", function () {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
    gulp.watch(["./src/scss/**/*.scss"],["sass-2-css"]);
    gulp.watch(['./build/*.html', './build/css/*.css', './build/js/*.js']).on('change', browserSync.reload);
});

//(4) a tash that converting sass-2-css
gulp.task("sass-2-css", function () {

    gulp.src('./src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(uglifycss())
    .pipe(gulp.dest('build/css'));

});

//(1) a task that is runinng when typing gulp and running "watch", "serve", "css-watch" tasks

gulp.task("default", [ "watch", "serve"]);