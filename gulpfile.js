const gulp = require('gulp')
const fileInclude = require('gulp-file-include')
const postcss = require('gulp-postcss')

gulp.task('html', function () {
  return gulp
    .src('src/*.html')
    .pipe(
      fileInclude({
        prefix: '@@',
        basepath: '@file'
      })
    )
    .pipe(gulp.dest('dist'))
})

gulp.task('assets', function () {
  return gulp.src('src/assets/**/*', { encoding: false }).pipe(gulp.dest('dist/assets'))
})

gulp.task('js', function () {
  return gulp.src('src/js/**/*').pipe(gulp.dest('dist/js'))
})

gulp.task('css', function () {
  return gulp.src('src/style/**/*.css').pipe(postcss()).pipe(gulp.dest('dist/style'))
})

gulp.task('watch', function () {
  gulp.watch('src/*.html', gulp.series('html', 'css'))
  gulp.watch('src/assets/**/*', gulp.series('assets'))
  gulp.watch('src/js/**/*', gulp.series('js'))
  gulp.watch('src/style/**/*.css', gulp.series('css'))
})

gulp.task('build', gulp.series('html', 'assets', 'js', 'css'))

gulp.task('dev', gulp.series('build', 'watch'))
