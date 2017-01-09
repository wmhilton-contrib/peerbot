#!/usr/bin/env node
'use strict'
var pkg = require('./package.json')
var exec = require('child_process').exec

// Future-proof & backwards compatible. Probably.
var electronVersion = pkg.devDependencies['electron-prebuilt']
                    || pkg.dependencies['electron-prebuilt']
                    || pkg.devDependencies['electron']
                    || pkg.dependencies['electron']

exec('node-gyp rebuild --target=' + electronVersion + ' --arch=' + process.arch + ' --dist-url=https://atom.io/download/atom-shell', {
  cwd: 'node_modules/leveldown',
  env: {
    'HOME': '~/.electron-gyp'
  }
}, function (error, stdout, stderr) {
  if (error) console.log(error)
  console.log(stdout)
  console.log(stderr)
})
