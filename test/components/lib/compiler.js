require('babel-register')

function noop () {
 return null
}
require.extensions['.css'] = noop
require.extensions['.scss'] = noop

