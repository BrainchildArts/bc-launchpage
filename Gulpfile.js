var gulp = require('gulp'),
  p = require('gulp-load-plugins')(),
  autoprefixer = require('gulp-autoprefixer'),
  bourbon = require('node-bourbon'),
  browsersync = require('browser-sync'),
  deploy = require('gulp-gh-pages'),
  haml = require('gulp-ruby-haml'),
  include = require('gulp-include'),
  neat = require('node-neat').includePaths,
  sass = require('gulp-ruby-sass'),
  sourcemaps = require('gulp-sourcemaps');

var paths = {
  haml: './source/views/*.haml',
  javascript: './source/assets/javascripts/**/*.js',
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
  return gulp.src(paths.javascript)
    .pipe(sourcemaps.init())
    .pipe(include())
    .pipe(coffee())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/assets/javascripts'));
});


// JS Compile
gulp.task('scripts', function() {
    gulp.src(paths.javascript)
        .pipe(p.concat('scripts.js'))
        .pipe(gulp.dest('./build/assets/javascripts'))
        .pipe(p.uglify())
        .pipe(p.rename({
            suffix: '.min'
        }))
        .on("error", errorAlert)
        .pipe(gulp.dest('./build/assets/javascripts'))
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
  browsersync({
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
  gulp.watch(paths.javascript, ['scripts']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(paths.fonts, ['fonts']);
  gulp.watch('./build/*.html', browsersync.reload);
  gulp.watch('./build/assets/stylesheets/*.css', browsersync.reload);
  gulp.watch('./build/assets/javascripts/*.js', browsersync.reload);
  gulp.watch('./build/assets/images/*', browsersync.reload);
  gulp.watch('./build/assets/fonts/*', browsersync.reload);
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
