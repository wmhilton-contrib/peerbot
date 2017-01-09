'use strict'
var pkg = require('./package.json')
var exec = require('child_process').exec
exec('node-gyp rebuild --target=' + pkg.devDependencies['electron-prebuilt'] + ' --arch=x64 --dist-url=https://atom.io/download/atom-shell', {
  cwd: 'node_modules/leveldown',
  env: {
    'HOME': '~/.electron-gyp'
  }
}, function (error, stdout, stderr) {
  if (error) console.log(error)
  console.log(stdout)
  console.log(stderr)
})
