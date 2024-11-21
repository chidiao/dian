const gulp = require('gulp')
const fileInclude = require('gulp-file-include')
const postcss = require('gulp-postcss')

const paths = {
  html: {
    src: 'src/**/*.html',
    dest: 'dist/'
  },
  css: {
    src: 'src/style/**/*.css',
    dest: 'dist/style/'
  },
  js: {
    src: 'src/js/**/*',
    dest: 'dist/js/'
  },
  assets: {
    src: 'src/assets/**/*',
    dest: 'dist/assets/'
  }
}

gulp.task('html', function () {
  return gulp
    .src(paths.html.src)
    .pipe(
      fileInclude({
        prefix: '@@',
        basepath: '@file'
      })
    )
    .pipe(gulp.dest(paths.html.dest))
})

gulp.task('js', function () {
  return gulp.src(paths.js.src).pipe(gulp.dest(paths.js.dest))
})

gulp.task('css', function () {
  return gulp.src(paths.css.src).pipe(postcss()).pipe(gulp.dest(paths.css.dest))
})

gulp.task('assets', function () {
  return gulp.src(paths.assets.src).pipe(gulp.dest(paths.assets.dest))
})

gulp.task('watch', function () {
  gulp.watch(paths.html.src, gulp.series('html'))
  gulp.watch(paths.js.src, gulp.series('js'))
  gulp.watch(paths.css.src, gulp.series('css'))
  gulp.watch(paths.assets.src, gulp.series('assets'))
})

gulp.task('dev', gulp.series('html', 'js', 'css', 'assets', 'watch'))

gulp.task('build', gulp.series('html', 'js', 'css', 'assets'))
