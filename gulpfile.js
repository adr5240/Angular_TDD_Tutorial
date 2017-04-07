let gulp = require('gulp');
let browserSync = require('browser-sync');
let karma = require('karma').server;

gulp.task('serve', function() {
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

gulp.task('test-browser',function(done){
    return karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true,
		reporters:['mocha'],
    }, function(){
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
