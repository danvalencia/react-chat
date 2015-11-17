var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');
var gulp = require("gulp");

var paths = {
  app: ['src/app/**/*.js'],
  ui: ['src/ui/**/*.js'],
}

gulp.task("browserify", function () {
  browserify("src/ui/main.js")
             .transform("babelify", {presets: ["es2015", "react"]})
             .bundle()
             .pipe(source('bundle.js'))
             .pipe(gulp.dest('dist'));
});;

gulp.task("scripts", function () {
  return gulp.src("src/app/**/*.js")
             .pipe(babel({
                presets: ['es2015']
              }))
             .pipe(gulp.dest('dist'));
});

gulp.task("default", ["scripts", "browserify"]);

gulp.task("watch", function() {
  gulp.watch(paths.app, ["scripts"]);
  gulp.watch(paths.ui, ["browserify"]);
});
