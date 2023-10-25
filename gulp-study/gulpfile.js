const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const newer = require('gulp-newer');

gulp.task("imagemin", function () {
    return gulp
        .src('../public/img_src/**/*')
        .pipe(changed('../public/img'))
        .pipe(newer('../public/img'))
        .pipe(
            imagemin([
                imagemin.optipng({
                    optimizationLevel: 7,
                })
            ])
        )
        .pipe(gulp.dest('../public/img'));
});

gulp.task('watch-imagemin', function() {
    gulp.watch('../public/img_src/**/*', gulp.task('imagemin'));
});

gulp.task('default', gulp.parallel('watch-imagemin'));