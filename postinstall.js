#!/usr/bin/env node
'use strict'

var path = require('path')
process.chdir(path.join(__dirname))

var pkg = require('./package.json')
var exec = require('child_process').exec

// Future-proof & backwards compatible. Probably.
var electronVersion = pkg.devDependencies['electron-prebuilt'] ||
                      pkg.dependencies['electron-prebuilt'] ||
                      pkg.devDependencies['electron'] ||
                      pkg.dependencies['electron']

// Something about this is broken TODO: Fix this!
process.chdir('node_modules/leveldown')
exec('node-gyp rebuild --target=' + electronVersion + ' --arch=' + process.arch + ' --dist-url=https://atom.io/download/atom-shell', {
  env: {
    'HOME': '~/.electron-gyp'
  }
}, function (error, stdout, stderr) {
  if (error) console.log(error)
  console.log(stdout)
  console.log(stderr)
})
