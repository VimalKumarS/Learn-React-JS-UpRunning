var gulp = require('gulp');
var combineCSS = require('combine-css');
 
gulp.task('combine', function() {
    gulp.src('./css/*/*.css')
        .pipe(combineCSS({
            lengthLimit: 256,//2KB 
            prefix: '_m-',
            selectorLimit: 4080
        }))
        .pipe(gulp.dest('./combinedCSS'));
});


var concatCss = require('gulp-concat-css');
 
gulp.task('combine-css', function () {
  return gulp.src('./css/**/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('./'));
});
 
gulp.task('default', ['combine-css']);