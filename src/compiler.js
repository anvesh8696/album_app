'use strict'
require('babel-register')
function noop () {
  return null
}
require.extensions['.css'] = noop
