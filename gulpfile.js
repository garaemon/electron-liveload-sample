'use strinct';
var gulp = require('gulp');
var electronServer = require('electron-connect').server;
gulp.task('serve', function () {
  var electron = electronServer.create();
  // Electronの起動
  electron.start();

  // BrowserProcess(MainProcess)が読み込むリソースが変更されたら, Electron自体を再起動
  gulp.watch(['src/app.js', 'src/browser/**/*.js'], electron.restart);

  // RendererProcessが読み込むリソースが変更されたら, RendererProcessにreloadさせる
  gulp.watch(['styles/**/*.css', 'src/renderer/**/*.{html,js}'], electron.reload);
});
