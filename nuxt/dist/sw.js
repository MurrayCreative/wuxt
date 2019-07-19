importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0c79f3a449c37412adad.js",
    "revision": "81d27467ba2096f05793641fc5683adf"
  },
  {
    "url": "/_nuxt/117855c366c2df3603d5.js",
    "revision": "180909247399a03ff8dba2ce7dc0794d"
  },
  {
    "url": "/_nuxt/4776335b5523ffd1a159.js",
    "revision": "baabf4d8cbd2741526963d1583bd4744"
  },
  {
    "url": "/_nuxt/6a3a2cd9937fa4e5c4e8.js",
    "revision": "e80f81ce69fb3386faa453b9fd88f460"
  },
  {
    "url": "/_nuxt/d47b17605a11694962cb.js",
    "revision": "8148328d36c152c36e4102d09a4fddc7"
  },
  {
    "url": "/_nuxt/f5a7bc30a17aaa5a4ec9.js",
    "revision": "e44524b58f204a60bd5e8dacab95093d"
  }
], {
  "cacheId": "wuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
