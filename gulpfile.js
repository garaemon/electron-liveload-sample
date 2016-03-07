'use strinct';
var gulp = require('gulp');
var electronServer = require('electron-connect').server;
gulp.task('serve', function () {
  var electron = electronServer.create();
  // Startup electron
  electron.start();

  // Restart electron when resources of browser process are updated
  gulp.watch(['src/app.js', 'src/browser/**/*.js'], electron.restart);

  // Reload render process when resources of render process are updated
  gulp.watch(['styles/**/*.css', 'src/renderer/**/*.{html,js}'], electron.reload);
});
