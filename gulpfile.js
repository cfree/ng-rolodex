/**
 * Define extensions
 */
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	compass = require('gulp-compass'),
	filesCached = require('gulp-cache'),
	filesChanged = require('gulp-changed'),
	jsHint = require('gulp-jshint'),
	livereload = require('gulp-livereload'),
	notify = require('gulp-notify'),
	map = require('map-stream'),
	bower = require('gulp-bower'),
	jsMinify = require('gulp-uglify'),
    cssMinify = require('gulp-minify-css'),
    joinFiles = require('gulp-concat'),
	watching = false,
	rename = require('gulp-rename'),
	ngAnnotate = require('gulp-ng-annotate'),
	sourcemaps = require('gulp-sourcemaps'),
	files = {
		all: {
			scss: 'public/assets/scss/**/*.scss',
			css: 'public/assets/css/*.css',
			js: {
				app: 'app/**/*.js',
				custom: 'public/assets/js/**/*.js',
				vendor: 'public/assets/vendor/**/*.min.js'
			},
			img: 'public/assets/img/**/*'
		},
		dist: {
			css: 'public/assets/dist/styles.min.css',
			js: 'public/assets/dist/scripts.min.css',
			app: 'public/assets/dist/app.min.css'
		}
	},
	paths = {
		scss: 'public/assets/scss/',
		css: 'public/assets/css/',
		js: 'public/assets/js/',
		img: 'public/assets/img/',
		bower: 'public/assets/vendor/',
		app: 'app/',
		dist: 'public/assets/dist/'
	};


/**
 * Development tasks
 */

// Compile Sass via Compass and refresh styles in browser
gulp.task('compileSass', function() {
	return gulp.src(files.all.scss)
		.pipe(
			compass({
				css: paths.css,
				sass: paths.scss,
				image: paths.img,
				comments: false,
				require: ['susy', 'normalize-scss']
			})
			.on('error', notify.onError({
				message: 'Sass failed: <%= error.message %>'
			}))
		)
		.pipe(gulp.dest(paths.css))
		.pipe(livereload())
		.pipe(notify('Compass successfully compiled'));
});

// Compile scripts
gulp.task('compileScripts', function() {
	gulp.src(files.all.js.app)
		.pipe(jsHint())
		.pipe(jsHint.reporter('default'))
		.on('error', notify.onError(function(file) {
			if (!file.jshint.success) {
				return 'JSHint failed. Check console for errors';
			}
		}))
		.pipe(sourcemaps.init())
			.pipe(joinFiles('app.js'))
			.pipe(ngAnnotate())
				.on('error', notify.onError("Error: <%= error.message %>"))
			.pipe(jsMinify())
				.on('error', notify.onError("Error: <%= error.message %>"))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(paths.js));
});

// Install Bower components
gulp.task('runBower', function() {
	return bower(paths.bower)
		.pipe(gulp.dest(paths.bower));
});

// Set watch mode
gulp.task('setWatchStatus', function() {
	watching = true;
});


/**
 * Build tasks
 */

// Process style files
gulp.task('readyStyles', function() {
	gulp.src(files.all.css)
		.pipe(cssMinify())
		.pipe(rename('styles.min.css'))
		.pipe(gulp.dest(paths.dist));
});

// Process script files
gulp.task('readyScripts', function() {
	gulp.src(files.all.js.app)
		.pipe(joinFiles('app.min.js'))
		.pipe(ngAnnotate())
			.on('error', notify.onError("Error: <%= error.message %>"))
		.pipe(jsMinify())
			.on('error', notify.onError("Error: <%= error.message %>"))
		.pipe(gulp.dest(paths.dist));
});


/**
 * Run tasks
 */
gulp.task('watch', ['setWatchStatus'], function() {
	gulp.watch(files.all.scss, ['compileSass']);
	gulp.watch(files.all.js.app, ['compileScripts']);
	livereload.listen();
});

gulp.task('build', ['readyStyles', 'readyScripts']);

gulp.task('install', ['runBower']);

// Default task
gulp.task('default', ['compileSass', 'compileScripts']);
