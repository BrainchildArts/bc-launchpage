var gulp = require('gulp'),
  $ = require('gulp-load-plugins')(),
  autoprefixer = require('gulp-autoprefixer'),
  bourbon = require('node-bourbon'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload,
  deploy = require('gulp-gh-pages'),
  haml = require('gulp-ruby-haml'),
  include = require('gulp-include'),
  neat = require('node-neat').includePaths,
  sass = require('gulp-ruby-sass'),
  sourcemaps = require('gulp-sourcemaps');

var paths = {
  haml: './source/views/*.haml',
  js: './source/assets/js/*.js',
  jsvendor: './source/assets/js/vendor/*.js',
  scss: './source/assets/stylesheets/**/*.scss',
  images: './source/assets/images/**/*',
  fonts: './source/assets/fonts/*'
};

// Haml templates
gulp.task('views', function () {
  gulp.src(paths.haml)
    .pipe(haml())
    .pipe(gulp.dest('./build'));
});

// Scss stylesheets
gulp.task('stylesheets', function() {
  return gulp.src(paths.scss)
    .pipe(sass({
      loadPath: [paths.scss].concat(neat),
      "sourcemap=none": true
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./build/assets/stylesheets'));
});

// Coffeescript
gulp.task('coffeecripts', function() {
  return gulp.src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(include())
    .pipe(coffee())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/assets/js'));
});

// Lint JavaScript
gulp.task('jshint', function () {
  return gulp.src(['./source/assets/js/**/*.js', '!./source/assets/js/vendor/*.js'])
    .pipe(reload({stream: true, once: true}))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});


// JS Compile
gulp.task('scripts', function() {
    gulp.src(paths.js)
        .pipe($.concat('scripts.js'))
        .pipe(gulp.dest('./build/assets/js'))
        .pipe($.uglify())
        .pipe($.rename({
            suffix: '.min'
        }))
        .on("error", errorAlert)
        .pipe(gulp.dest('./build/assets/js'))
    gulp.src(paths.jsvendor)
        .pipe(gulp.dest('./build/assets/js/vendor'))
});

// Copy images
gulp.task('images', function () {
  gulp.src(paths.images)
    .pipe(gulp.dest('./build/assets/images'));
});

// Copy fonts
gulp.task('fonts', function () {
  gulp.src(paths.fonts)
    .pipe(gulp.dest('./build/assets/fonts'));
});

// Server
gulp.task('server', function() {
  browserSync({
    server: {
      baseDir: "./build",
    },
    port: 4000,
    notify: false,
    open: false
  });
});

gulp.task('watch', function() {
  gulp.watch(paths.haml, ['views']);
  gulp.watch(paths.scss, ['stylesheets']);
  gulp.watch(paths.js, ['scripts']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(paths.fonts, ['fonts']);
  gulp.watch('./build/*.html', reload);
  gulp.watch('./build/assets/stylesheets/*.css', reload);
  gulp.watch('./build/assets/js/*.js', reload);
  gulp.watch('./build/assets/images/*', reload);
  gulp.watch('./build/assets/fonts/*', reload);
});

// Run
gulp.task('default', ['views', 'stylesheets', 'scripts', 'images', 'fonts', 'server', 'watch'], function() {

});

function errorAlert(err) {
    console.log(err.toString());
    this.emit("end");
}

// Deploy
gulp.task('deploy', function () {
  return gulp.src("./build/**/*")
    .pipe(deploy);
});
