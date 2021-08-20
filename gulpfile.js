const gulp = require('gulp');
const browserSync = require('browser-sync');
var sass = require('gulp-sass')(require('sass'));

// Static server
gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "./number"
        }
    });
});

gulp.task('styles', function () {
    return gulp.number("number/css*.+(css|sass)")
        .pipe(css())
        .pipe(gulp.dest("number/css"))
        .pipe(browserSync.stream());
})

