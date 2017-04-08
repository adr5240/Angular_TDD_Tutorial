let gulp = require('gulp');
let browserSync = require('browser-sync');
let karma = require('karma').server;
let server = require('gulp-live-server');

gulp.task('serve', ['server'], function() {
    browserSync.init({
        notify: false,
        port: 8080,
        server: {
            baseDir: ["app"],
            routes: {
                '/bower_components': 'bower_components'
            }
        }
    });

    gulp.watch(['app/**/*.*'])
        .on('change', browserSync.reload);
});

gulp.task('server', function() {
    let live = new server('server.js');
    live.start();
});

gulp.task('test-browser',function(done){
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true,
		reporters:['mocha', 'coverage'],
    }, function() {
        done();
    });
});

gulp.task('serve-test', function() {
    browserSync.init({
        notify: false,
        port: 5000,
        server: {
            baseDir: ["test","app"],
            routes: {
                '/bower_components': 'bower_components'
            }
        }
    });

    gulp.watch(['app/**/*.*'])
        .on('change', browserSync.reload);
});

gulp.task('serve-coverage', ['test-browser'],  function() {
    browserSync.init({
        notify: false,
        port: 7777,
        server: {
            baseDir: ["test/coverage"]
        }
    });

    gulp.watch(['app/**/*.*'])
        .on('change', browserSync.reload);
});
