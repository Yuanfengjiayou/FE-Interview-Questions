/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bf3cc8d57c7341d6932c44b81e05e825"
  },
  {
    "url": "assets/css/0.styles.c13490f4.css",
    "revision": "3ef503b844cce3563eca23ef1a48c8f4"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/pay1.8e35793f.png",
    "revision": "8e35793f139db425b3bee4b65312bc85"
  },
  {
    "url": "assets/img/pay2.62bd064a.png",
    "revision": "62bd064a2916d05287fd84558c95eff6"
  },
  {
    "url": "assets/img/qr.ee193d28.jpg",
    "revision": "ee193d2841cd47e179326d50d67312f9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d5e7918f.js",
    "revision": "b41517cd304cec9527c186a1c268ffde"
  },
  {
    "url": "assets/js/11.947fd81f.js",
    "revision": "4583dcaed305282d3dcbd53bce3663a3"
  },
  {
    "url": "assets/js/12.2f2dfe7d.js",
    "revision": "4773e8cbf796b511c7d929f387abdd59"
  },
  {
    "url": "assets/js/13.0c984918.js",
    "revision": "c5f74014ededb175950c108814ed41be"
  },
  {
    "url": "assets/js/14.2fdb0a41.js",
    "revision": "4996ca5ea66131cc20540f72753a7f8c"
  },
  {
    "url": "assets/js/15.e1e7ca5c.js",
    "revision": "d71c33408e64f9d5bf56ddc72da47763"
  },
  {
    "url": "assets/js/16.8bbc34cf.js",
    "revision": "f1ef695ed3ee58275b934afd3b949a77"
  },
  {
    "url": "assets/js/17.ae41bd1f.js",
    "revision": "7c41711555c5b2d526dd7c341ba43e0d"
  },
  {
    "url": "assets/js/2.032de617.js",
    "revision": "288d74c8a4e275280c50353382e9e0d8"
  },
  {
    "url": "assets/js/3.5e6ebbd9.js",
    "revision": "34840a4dbc0b88bfadd165f9f29be600"
  },
  {
    "url": "assets/js/4.981eefd9.js",
    "revision": "c77303f56020305735321473dfc6962d"
  },
  {
    "url": "assets/js/5.e7af6da0.js",
    "revision": "f4daf109f062bd93e3584f0953b77ce1"
  },
  {
    "url": "assets/js/6.0f9e3c74.js",
    "revision": "90c84c590f8eb202de85d147cb38e0ad"
  },
  {
    "url": "assets/js/7.c9b91849.js",
    "revision": "2bf16c1409eb8ad9dc7530316eb92a3a"
  },
  {
    "url": "assets/js/8.7008e968.js",
    "revision": "baba8a134976f381a58c654ec3f6aae8"
  },
  {
    "url": "assets/js/9.4a4f98db.js",
    "revision": "92eaa7ce9b540c34af48cea2211a4395"
  },
  {
    "url": "assets/js/app.2e0b485f.js",
    "revision": "862816f050aaa5b15d10003f840a936b"
  },
  {
    "url": "docs/advance.html",
    "revision": "8060d3b539daac0ae9c38503c5c89655"
  },
  {
    "url": "docs/base.html",
    "revision": "862dd7e63f5d409bdfc6519c90b8685a"
  },
  {
    "url": "docs/comprehensive.html",
    "revision": "dfcc8c7064eb1facfe115afdd096849b"
  },
  {
    "url": "docs/computed-base.html",
    "revision": "d8fb70f354da68fa9b7a8d439f763e2f"
  },
  {
    "url": "docs/excellent.html",
    "revision": "6ece7153163a9b41c995c9d953fcf9d4"
  },
  {
    "url": "docs/improve.html",
    "revision": "0087f33a1e2e511e5e23772fa944192a"
  },
  {
    "url": "docs/qa.html",
    "revision": "ea52a7372d2918a18ff9dd87e7f49bea"
  },
  {
    "url": "docs/review.html",
    "revision": "8720cb955010304705a4f8921e23b3be"
  },
  {
    "url": "docs/simply.html",
    "revision": "8298347f76206e8cdee551299a5f732d"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "ca795d1f7f1c54a49c43c03774586f0c"
  },
  {
    "url": "logo.png",
    "revision": "736ab2ad735e2b92e0b74ba0ca36ca7a"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  },
  {
    "url": "qrcode.jpg",
    "revision": "ee193d2841cd47e179326d50d67312f9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
