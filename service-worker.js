"use strict";var precacheConfig=[["/index.html","ddc8831552f109eb2038ba1bf9ad98c7"],["/static/css/main.58315556.css","89191caa6b60f77333f5ad5c2801ff2e"],["/static/js/main.3c423ad0.js","6f2cf7b6ae3213620da0c4d86c73f13f"],["/static/media/5.58f23e0d.png","58f23e0dd5731cab60645fd7e571730b"],["/static/media/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.2928664f.svg","2928664fe1fc6aca88583a6f606d60ba"],["/static/media/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.0f3514a4.svg","0f3514a45d51f95167e5fe8b6a03bb60"],["/static/media/Group 4@2x.c30be7db.png","c30be7dbfc7cbcf17e75477e12f87cf5"],["/static/media/adam-whitlock-270558-unsplash.ef01cf2e.jpg","ef01cf2e8598b562dd91eba73cbff4cd"],["/static/media/background.a5c30b99.jpg","a5c30b99c4e9e1428e55501e72106204"],["/static/media/bhz.43cb7411.jpg","43cb7411e6dae6a1a54fd1c39fffe36d"],["/static/media/bihanzhu.d5282eba.jpg","d5282eba2fba0a2fc7830818baaf7e56"],["/static/media/cam.3b7b6506.png","3b7b6506c35d665e1b97518a6f693c48"],["/static/media/camera-eats-first@1x.dfcaa59b.png","dfcaa59b98be3b4e14aed2298d6ba1a5"],["/static/media/camera-eats-first@2x.e73a17ff.png","e73a17ffef066e105da327530c86a5aa"],["/static/media/camera.0623fb73.mp4","0623fb73d46cb3c46329e0a07590bdf4"],["/static/media/card-swipe.d35353f2.mp4","d35353f2b69e9ada79fd35ebfde1df52"],["/static/media/daniel-jensen-440210-unsplash.2e22c74c.jpg","2e22c74cdb60015a9f0fd5720e40c90c"],["/static/media/emile-seguin-211406-unsplash.d48ac0dc.jpg","d48ac0dc0d6bb7a4b2fd837cfbe15ef0"],["/static/media/g 2018-06-06 09.48.59.97fb9f00.mp4","97fb9f0035d4493db567ed7d253e7198"],["/static/media/google-play-badge.9e7f5202.eps","9e7f5202a3d3576a975afc047f0074a3"],["/static/media/google-play-badge.db9b21a1.png","db9b21a1c41f3dcd9731e1e7acfdbb57"],["/static/media/haorenzhong.8094ba0e.jpg","8094ba0ecc5e99f45a04e32873ab9a92"],["/static/media/home-init.53249303.png","532493037b057240217f86d1faddc5d8"],["/static/media/home.11df3be2.png","11df3be26d75d5235803b22e172818f8"],["/static/media/iit-graphic.567bd630.svg","567bd630ae4186aa8ba001b0aa477383"],["/static/media/iit-header@1x.83edebad.png","83edebad2ad0921e2460fb044c8c6cbb"],["/static/media/iit-outline@3x.00ea9ba7.svg","00ea9ba7e616545f725c4b10704ed366"],["/static/media/iit-phone.a28aaf29.png","a28aaf29e6521e35c30a9266453ad286"],["/static/media/iit-text.698a7a06.svg","698a7a0613aa94f84164469561d0dd38"],["/static/media/iit-waterfall.7774c968.jpg","7774c968f38af4060ac555031c8b8207"],["/static/media/iit.cc993dae.svg","cc993daef0352fd602391af8680018a0"],["/static/media/iit@3x.f5cc751c.svg","f5cc751cb1063ec2efbdd3484a0a0b85"],["/static/media/iphone-x-frame.61d3c959.png","61d3c9594932429ef146b7d3181f81e2"],["/static/media/jiachengjiang.aff3f646.jpg","aff3f6460426e2ea1c192ffc250029f8"],["/static/media/jiandachen.30233fb4.jpg","30233fb4a262ef69c2500a3bdfdf6fa5"],["/static/media/raul-najera-460485-unsplash.444eabc7.jpg","444eabc7ca06dfe0930e7d130355522f"],["/static/media/rawpixel-250087-unsplash.be7d8efd.jpg","be7d8efd65c480d6cd552a101be114f1"],["/static/media/shunzheyu.215f7536.jpg","215f75362e5c239ecaf7dab470de2375"],["/static/media/tyler-franta-589346-unsplash.9639a5cd.jpg","9639a5cddc4034c282967fffa7b20075"],["/static/media/whalesper-black.12c82206.svg","12c8220622d8448866200579b05dbb7d"],["/static/media/whalesper-header@1x.6718f169.png","6718f169a51cf5bf2ac4d36538b32494"],["/static/media/whalesper-header@2x.d064dca3.png","d064dca3987be5ca3a8a2c2820a26167"],["/static/media/whalesper-phone.0b670763.png","0b670763158137f643a516f08eee8320"],["/static/media/whalesper-white.24a270c8.svg","24a270c8c2ac3475d51a84c61bf90ca4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});