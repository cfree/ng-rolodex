/**
 * Define extensions
 */
var gulp = require('gulp'),
	compass = require('gulp-compass'),
	jsHint = require('gulp-jshint'),
	livereload = require('gulp-livereload'),
	notify = require('gulp-notify'),
	bower = require('gulp-bower'),
	jsMinify = require('gulp-uglify'),
    cssMinify = require('gulp-minify-css'),
    browserify = require('browserify'),
	source = require('vinyl-source-stream'),
	rename = require('gulp-rename'),

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

// Browserify
gulp.task('browserify', function() {
	return browserify(paths.app + 'rolodex.module.js')
		.bundle()
		.pipe(source('app.js'))
		.pipe(gulp.dest(paths.js));
});

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
		.pipe(gulp.dest(paths.js));
});

// Install Bower components
gulp.task('runBower', function() {
	return bower(paths.bower)
		.pipe(gulp.dest(paths.bower));
});



/**
 * Build tasks
 */

// Process style files
gulp.task('readyStyles', function() {
	gulp.src(files.all.css)
		.pipe(cssMinify())
		.pipe(rename(function(path) {
			path.basename += '.min';
		}))
		.pipe(gulp.dest(paths.dist));
});

// Process script files
gulp.task('readyScripts', function() {
	gulp.src(files.all.js.custom)
		.pipe(jsMinify())
			.on('error', notify.onError("Error: <%= error.message %>"))
		.pipe(rename(function(path) {
			path.basename += '.min';
		}))
		.pipe(gulp.dest(paths.dist));
});


/**
 * Run tasks
 */
gulp.task('watch', function() {
	gulp.watch(files.all.scss, ['compileSass']);
	gulp.watch(files.all.js.app, ['browserify']);
	livereload.listen();
});

gulp.task('build', ['readyStyles', 'readyScripts']);

gulp.task('install', ['runBower']);

// Default task
gulp.task('default', ['compileSass', 'browserify']);
