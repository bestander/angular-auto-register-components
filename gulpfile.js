var gulp = require('gulp');
var inject = require("gulp-inject");


gulp.task('dev', function () {
    return gulp.watch([ 'js/**/*.js'], ['inject-amd-deps']);
});

gulp.task('inject-amd-deps', function () {
    return gulp.src('js/register-angular-injects.js')
        .pipe(inject(gulp.src([ "js/**/*.js", "!js/*.js" ], {read: false}), {
            ignorePath: 'js',
            addRootSlash: false,
            starttag: 'define([',
            endtag: ']',
            transform: function (filepath, file, i, length) {
                return '"' + filepath.slice(0, -3) + '", ';
            }
        }))
        .pipe(gulp.dest('js'));
});