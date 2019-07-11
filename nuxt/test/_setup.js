const hooks = require('require-extension-hooks')

if (process.env.TEST === 'unit' || process.env.TEST === 'update') {
  require('jsdom-global')()
  require('browser-env')
  const Vue = require('vue')

  Vue.config.productionTip = false
  Vue.config.devtools = false
  // https://github.com/nuxt/create-nuxt-app/issues/180#issuecomment-463069941
  window.Date = global.Date = Date
}

if (process.env.TEST === 'e2e') {
  const Vue = require('vue')
  Vue.config.productionTip = false
  Vue.config.devtools = false
}

// Setup vue files to be processed by `require-extension-hooks-vue`
hooks('vue')
  .plugin('vue')
  .push()
// Setup vue and js files to be processed by `require-extension-hooks-babel`
hooks(['vue', 'js'])
  .exclude(({ filename }) => filename.match(/\/node_modules\//))
  .plugin('babel')
  .push()
