var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var paths = {
  scripts: ['src/**/*.js']
}
gulp.task("browserify", function () {
  return browserify("src/ui/app.js")
             .pipe(source('bundle.js'))
             .pipe(gulp.dest('dist'));
});;

gulp.task("scripts", function () {
  return gulp.src("src/**/*.js")
             .pipe(babel({
                presets: ['es2015']
              }))
             .pipe(gulp.dest('dist'));
});

gulp.task("default", ["scripts"]);

gulp.task("watch", function() {
  gulp.watch(paths.scripts, ["scripts"]);
});
